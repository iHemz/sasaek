import { Link, useLocation } from "react-router";

type LinkProps = {
  href: string;
  content: React.ReactNode;
};

export const RenderLink = ({ href, content }: LinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link className={isActive ? "renderlink-active" : undefined} to={href}>
      {content}
    </Link>
  );
};
