import { generateID } from "@/libs/common";

export type HeroData = {
  id: string;
  title: string;
  headline: string;
  footer: string;
  image: string;
};

export const data: HeroData[] = [
  {
    id: generateID(),
    title: "특별한 나눔",
    headline: "함께하는 마음이 만드는 소중한 변화",
    footer: "즐거움과 나눔이 있는 감동의 순간",
    image: "src/assets/hero.png",
  },
  {
    id: generateID(),
    title: "특별한 나눔",
    headline: "함께하는 마음이 만드는 소중한 변화",
    footer: "즐거움과 나눔이 있는 감동의 순간",
    image: "src/assets/hero.png",
  },
];
