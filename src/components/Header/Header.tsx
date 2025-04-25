import { useState } from "react";
import { Logo } from "@/libs/Logo";
import { RenderLink } from "@/libs/RenderLink";
import { Selector } from "@/libs/selector-library/Selector";

import "@/components/Header/header.scss";

const DATA = [
  { label: "KOR", value: "Korean" },
  { label: "EN", value: "English" },
];

export default function Header() {
  const [selected, setSelected] = useState("Korean");

  return (
    <header>
      <RenderLink href="/" content={<Logo />} />

      <nav className="menu">
        <RenderLink href="/" content="소개" />
        <RenderLink href="/소소담담 APP" content="소소담담 APP" />
        <RenderLink href="/활동" content="활동" />
        <Selector value={selected} onChange={(val) => setSelected(val)} data={DATA} />
      </nav>
    </header>
  );
}
