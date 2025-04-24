import { app1, app2, app3, app4 } from "@/assets";
import { generateID } from "@/libs/common";

type ActionProps = {
  el: HTMLDivElement;
  currentPos: number;
  maxPos: number;
  slideWidth: number;
};

export const actions = {
  prev: (props: ActionProps) => {
    if (props.currentPos < 0) {
      // include right allowance for the last slide
      const slideWidth = props.currentPos < props.maxPos ? props.slideWidth + 60 : props.slideWidth;

      props.el.style.left = `${props.currentPos + slideWidth}px`;
    }
  },
  next: (props: ActionProps) => {
    if (props.currentPos > props.maxPos) {
      const posDifference = props.currentPos - props.maxPos;

      // include right allowance for the last slide
      const slideWidth =
        posDifference <= props.slideWidth ? props.slideWidth + 60 : props.slideWidth;
      props.el.style.left = `${props.currentPos - slideWidth}px`;
    }
  },
};

export const data = [
  {
    id: generateID(),
    image: app1,
    title: "(주)행복한사람들",
    desc: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
  },
  {
    id: generateID(),
    image: app2,
    title: "바른댓글 실천연대",
    desc: "바른댓글 정착으로 아름다운 사회를 만들어갑니다.",
  },
  {
    id: generateID(),
    image: app3,
    title: "아트리안",
    desc: "생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.",
  },
  {
    id: generateID(),
    image: app4,
    title: "대한민국위멘위원회",
    desc: "어린이를 위한 위대한 멘토, 위멘이 함께 합니다.",
  },
];
