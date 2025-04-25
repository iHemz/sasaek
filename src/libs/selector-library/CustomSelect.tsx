import { useRef } from "react";
import { useTrueOrFalse } from "@/hooks/useTrueOrFalse";
import { ButtonIcon } from "@/libs/ButtonIcon";
import { Dropdown } from "@/libs/selector-library/Dropdown";
import { CustomSelectprops } from "@/libs/selector-library/types";

export function CustomSelect({ data, label, value, onChange, ...props }: CustomSelectprops) {
  const [openDropdown, { open, close, toggle }] = useTrueOrFalse();
  const PLACEHOLDER = props?.placeholder || "Select";
  const buttonRef = useRef<HTMLButtonElement>(null!);

  return (
    <>
      <ButtonIcon
        ref={buttonRef}
        icon="IconChevronDown"
        className="custom-select"
        data-scope="select"
        data-state={openDropdown ? "open" : "closed"}
        onClick={toggle}
      >
        {label}
        {!value && <span className="placeholder">{PLACEHOLDER}</span>}
      </ButtonIcon>
      {openDropdown && (
        <Dropdown data={data} onSelect={onChange} onClose={close} buttonRef={buttonRef} />
      )}
    </>
  );
}
