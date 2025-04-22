import { ComponentPropsWithoutRef, lazy, Suspense } from "react";

interface ButtonIconProps extends ComponentPropsWithoutRef<"button"> {
  icon: string;
  text?: string;
  size?: number;
  className?: string;
}

const ICON_SIZE = 16;

export function ButtonIcon({ icon, text, size = ICON_SIZE, ...props }: ButtonIconProps) {
  const LoadIcon = lazy(() =>
    import("@/libs/icons").then((module) => ({
      default: module[icon as keyof typeof module] || (() => null),
    }))
  );

  return (
    <Suspense fallback={<span className="icon-loading" />}>
      <button {...props}>
        {text && <span>{text}</span>}
        <LoadIcon size={size} />
      </button>
    </Suspense>
  );
}
