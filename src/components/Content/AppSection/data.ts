import { generateID } from "@/libs/common";

type LinkProp = {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
};

export const links: LinkProp[] = [
  { id: generateID(), title: "NOW", href: "/NOW", isActive: true },
  { id: generateID(), title: "커뮤니티", href: "/커뮤니티" },
  { id: generateID(), title: "문화•행사", href: "/문화•행사" },
  { id: generateID(), title: "서포터", href: "/서포터" },
  { id: generateID(), title: "멤버십", href: "/멤버십" },
];
