import { Data, GroupedData, OptionsArr, StringArr } from "@/libs/selector-library/types";

const isStringArr = (data: Data): data is StringArr => {
  return Array.isArray(data) && data.every((item) => typeof item === "string");
};

export const parseData = (data: Data): GroupedData => {
  if (isStringArr(data)) {
    return { data };
  }
  const hasGroupName = data.some((item) => !!item?.group);
  if (!hasGroupName) {
    return { data };
  }
  return groupData(data);
};

const groupData = (data: OptionsArr) => {
  return data.reduce<Record<string, OptionsArr>>((groups, item) => {
    const group = item.group || "Other";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {});
};
