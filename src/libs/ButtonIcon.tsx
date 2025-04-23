import { ComponentPropsWithoutRef, lazy, Suspense } from "react";

export interface ButtonIconProps extends ComponentPropsWithoutRef<"button"> {
  icon?: string;
  size?: number;
  className?: string;
}

const ICON_SIZE = 16;

export function ButtonIcon({ icon, children, size = ICON_SIZE, ...props }: ButtonIconProps) {
  const LoadIcon = lazy(() =>
    import("@/libs/icons").then((module) => ({
      default: module[icon as keyof typeof module] || (() => null),
    }))
  );

  return (
    <Suspense fallback={<span className="icon-loading" />}>
      <button {...props}>
        {children && <span>{children}</span>}
        <LoadIcon size={size} />
      </button>
    </Suspense>
  );
}
