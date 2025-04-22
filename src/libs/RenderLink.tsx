import { Link } from "react-router";

type LinkProps = {
  href: string;
  content: React.ReactNode;
};

export const RenderLink = ({ href, content }: LinkProps) => {
  return <Link to={href}>{content}</Link>;
};
