import { forwardRef } from "react";
import get from "lodash.get";
import { Data, GroupedData } from "@/libs/selector-library/types";

export const NativeSelect = forwardRef<HTMLSelectElement, { data: GroupedData }>(
  ({ data }, ref) => {
    return (
      <select ref={ref} aria-hidden="true" tabIndex={-1}>
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
);
