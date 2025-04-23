import { activity1, activity2, activity3, activity4 } from "@/assets";
import { generateID } from "@/libs/common";

export const data = [
  {
    id: generateID(),
    title: "인문학 콘서트",
    desc: "깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과 인문학의 이야기",
    image: activity1,
  },
  {
    id: generateID(),
    title: "지역 축제",
    desc: "지역의 숨결을 느끼며 함께 웃는 하루 소박한 만남속에 커지는 온기",
    image: activity2,
  },
  {
    id: generateID(),
    title: "나눔 바자회",
    desc: "행복이 전해지는 물건들, 그 속의 이야기들",
    image: activity3,
  },
  {
    id: generateID(),
    title: "따뜻한 후원",
    desc: "작은 나눔이 모여 큰 울림이 됩니다 사색의향기와 함께 만들어가는 더 나은 내일",
    image: activity4,
  },
];
