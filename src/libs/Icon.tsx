import { lazy, Suspense } from "react";
import { IconProps } from "@/libs/icons";

interface Props extends IconProps {
  className?: string;
}

const ICON_SIZE = 16;

export function Icon({ title, size = ICON_SIZE, ...props }: Props) {
  const LoadIcon = lazy(() =>
    import("@/libs/icons").then((module) => ({
      default: module[title as keyof typeof module] || (() => null),
    }))
  );

  return (
    <Suspense fallback={<span className="icon-loading" />}>
      <LoadIcon size={size} {...props} />
    </Suspense>
  );
}
