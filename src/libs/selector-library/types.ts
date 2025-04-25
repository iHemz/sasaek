import { ComponentPropsWithoutRef, ReactNode, RefObject } from "react";

export interface Option {
  label: string;
  value: string | number;
  group?: string;
}

export type OptionsArr = Array<Option>;
export type StringArr = Array<string>;

export type Data = OptionsArr | StringArr;
export type NativeSelectProps = ComponentPropsWithoutRef<"select">;
export type GroupedData = Record<string, Data>;

export interface SelectorProps extends Omit<NativeSelectProps, "onChange"> {
  value: Option["value"];
  data: Data;
  onChange: (val: string) => void;
  name?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export interface CustomSelectprops extends Omit<SelectorProps, "data"> {
  data: GroupedData;
  label: string;
}

export interface DropdownProps {
  data: GroupedData;
  onSelect: (value: string) => void;
  onClose: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}
