import { useMemo, useRef } from "react";
import get from "lodash.get";
import { CustomSelect } from "@/libs/selector-library/CustomSelect";
import { NativeSelect } from "@/libs/selector-library/NativeSelect";
import { parseData } from "@/libs/selector-library/tools";
import { SelectorProps } from "@/libs/selector-library/types";

export function Selector({ data, onChange, ...props }: SelectorProps) {
  const nativeSelectRef = useRef<HTMLSelectElement>(null!);

  const selectedItem = data.find((item) => {
    const itemValue = get(item, "value", item);
    return itemValue === props.value;
  });

  const parsedData = useMemo(() => parseData(data), [data]);

  const onCustomChange = (value: string) => {
    onChange(value);
    nativeSelectRef.current.value = value;
  };

  return (
    <div id="select" data-scope="select" data-part="root" className="select-wrapper">
      <NativeSelect ref={nativeSelectRef} data={parsedData} />
      <CustomSelect
        label={get(selectedItem, "label", String(selectedItem))}
        onChange={onCustomChange}
        data={parsedData}
        {...props}
      />
    </div>
  );
}
