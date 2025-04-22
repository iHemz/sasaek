import { ComponentPropsWithoutRef, ReactNode, useMemo } from "react";
import get from "lodash.get";
import { useTrueOrFalse } from "@/hooks/useTrueOrFalse";

interface Option {
  label: string;
  value: string | number;
  group?: string;
}

type OptionsArr = Array<Option>;
type StringArr = Array<string>;

type Data = OptionsArr | StringArr;
type NativeSelectProps = ComponentPropsWithoutRef<"select">;
type GroupedData = Record<string, Data>;

interface SelectorProps extends Omit<NativeSelectProps, "onChange"> {
  value: Option["value"];
  data: Data;
  onChange: (val: string) => void;
  name?: string;
  icon?: ReactNode;
}

export function Selector({ name, value, data, onChange, ...props }: SelectorProps) {
  const [openDropdown, { open, close, toggle }] = useTrueOrFalse();
  const parsedData = useMemo(() => parseData(data), [data]);

  return (
    <div id="select" data-scope="select" className="select-wrapper">
      <NativeSelect data={parsedData} />
    </div>
  );
}

function Dropdown({ data }: { data: Data }) {
  const parsedData = useMemo(() => parseData(data), [data]);
}

function NativeSelect({ data }: { data: GroupedData }) {
  return (
    <select aria-hidden="true" tabIndex={-1}>
      {Object.entries(data).map(([groupName, items], index) => {
        const hasGroupName = groupName !== "data";
        const options = (items as Data).map((item, itemIndex) => {
          const itemValue = get(item, "value", `${item}`);
          const itemLabel = get(item, "label", `${item}`);
          return (
            <option key={itemIndex} value={itemValue}>
              {itemLabel}
            </option>
          );
        });
        return hasGroupName ? <optgroup label={groupName}>{options}</optgroup> : options;
      })}
    </select>
  );
}

const isStringArr = (data: Data): data is StringArr => {
  return Array.isArray(data) && data.every((item) => typeof item === "string");
};

const parseData = (data: Data): GroupedData => {
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
