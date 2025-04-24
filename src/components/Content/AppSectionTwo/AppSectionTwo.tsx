import "@/components/Content/AppSectionTwo/AppSectionTwo.scss";

import { useRef } from "react";
import { BrandCard } from "@/components/Content/AppSectionTwo/BrandCard";
import { actions, data } from "@/components/Content/AppSectionTwo/data";
import { ButtonIcon } from "@/libs/ButtonIcon";

export function AppSectionTwo() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: "prev" | "next") => {
    if (!ref.current) return;

    const slider = ref.current;
    const currentPosition = parseInt(slider.style.left) || 0;
    const slideWidth = 368; // Width of each slide including gap
    const maxSlides = data.length;
    const maxPosition = -(slideWidth * (maxSlides - 2));

    actions[direction]({
      el: slider,
      currentPos: currentPosition,
      maxPos: maxPosition,
      slideWidth,
    });
  };

  return (
    <section className="app-section--2">
      <section className="control-area">
        <p>함께하는 이들</p>

        <div className="buttons">
          <ButtonIcon
            // disabled={activeIDIndex === 0}
            onClick={() => handleClick("prev")}
            icon="IconArrowLeft"
            className="btn"
          />
          <ButtonIcon
            // disabled={activeIDIndex === dataIDs.length - 1}
            onClick={() => handleClick("next")}
            icon="IconArrowRight"
            className="btn"
          />
        </div>
      </section>

      <section className="brands">
        <div ref={ref} className="slider-container">
          {data.map(({ id, ...itemProps }) => (
            <BrandCard key={id} {...itemProps} />
          ))}
        </div>
      </section>
    </section>
  );
}
