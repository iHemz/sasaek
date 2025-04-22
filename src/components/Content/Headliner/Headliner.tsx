import { Controls } from "@/components/Content/Headliner/Controls";
import { data } from "@/components/Content/Headliner/data";

import "@/components/Content/Headliner/headliner.scss";

import { useState } from "react";

export function Headliner() {
  const [itemId, setItemId] = useState(data[0].id);

  return (
    <section className="headliner">
      <div className="hero">
        {data.map((item) => (
          <article key={item.id} {...(item.id === itemId && { className: "active" })}>
            <p>{item.title}</p>
            <div className="divider"></div>
            <p>함께하는 마음이 만드는 소중한 변화</p>
            <p>즐거움과 나눔이 있는 감동의 순간</p>
            <img src={item.image} loading="lazy" />
          </article>
        ))}

        <Controls
          activeID={itemId}
          setID={(id) => setItemId(id)}
          dataIDs={data.map((item) => item.id)}
        />
      </div>
    </section>
  );
}
