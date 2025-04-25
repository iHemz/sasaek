import { ComponentPropsWithoutRef, forwardRef, lazy, memo, Suspense, useMemo } from "react";

export interface ButtonIconProps extends ComponentPropsWithoutRef<"button"> {
  icon?: string;
  size?: number;
  className?: string;
}

const ICON_SIZE = 16;

function ButtonIconComponent(
  { icon, children, size = ICON_SIZE, ...props }: ButtonIconProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const LoadIcon = useMemo(() => {
    if (!icon) return null;
    return lazy(() =>
      import("@/libs/icons").then((module) => ({
        default: module[icon as keyof typeof module] || (() => null),
      }))
    );
  }, [icon]);

  return (
    <Suspense fallback={<span className="icon-loading" />}>
      <button ref={ref} {...props}>
        {children && <span>{children}</span>}
        {LoadIcon && <LoadIcon size={size} />}
      </button>
    </Suspense>
  );
}

export const ButtonIcon = memo(forwardRef(ButtonIconComponent));
