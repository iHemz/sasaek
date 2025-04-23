import "@/components/Content/Activities/Activities.scss";

import { useState } from "react";
import { Activity } from "@/components/Content/Activities/Activity";
import { data } from "@/components/Content/Activities/data";
import { ButtonIcon } from "@/libs/ButtonIcon";
import { Icon } from "@/libs/Icon";

export function Activities() {
  const [selectedTab, setSelectedTab] = useState("함께하는 일");

  const handleClick = (tab: "함께하는 일" | "우리의 흔적") => {
    if (tab === selectedTab) return;
    setSelectedTab(tab);
  };

  const isFirstTab = selectedTab === "함께하는 일";

  return (
    <section className="activities">
      <nav className="tabs">
        <ButtonIcon
          onClick={() => handleClick("함께하는 일")}
          {...(isFirstTab && { className: "active" })}
          text="함께하는 일"
        />
        <Icon title="IconPointFilled" />
        <ButtonIcon
          onClick={() => handleClick("우리의 흔적")}
          {...(!isFirstTab && { className: "active" })}
          text="우리의 흔적"
        />
      </nav>

      <section className="list">
        {data.map(({ id: itemId, ...itemProps }) => (
          <Activity key={itemId} {...itemProps} />
        ))}
      </section>
    </section>
  );
}
