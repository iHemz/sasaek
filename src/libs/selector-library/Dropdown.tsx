import { useEffect, useRef, useState } from "react";
import get from "lodash.get";
import { createPortal } from "react-dom";
import { Data, DropdownProps } from "@/libs/selector-library/types";

export function Dropdown({ data, onSelect, onClose, buttonRef }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
    width: 0,
    useRight: false,
  });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const dropdownWidth = Math.max(200, rect.width); // Minimum width of 200px

      // Check if dropdown would extend past right edge of viewport
      const wouldOverflowRight = rect.left + dropdownWidth > viewportWidth;

      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        right: viewportWidth - (rect.right + window.scrollX),
        width: dropdownWidth,
        useRight: wouldOverflowRight,
      });
    }
  }, [buttonRef]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return createPortal(
    <div
      ref={dropdownRef}
      className="select-dropdown"
      style={{
        top: position.top,
        ...(position.useRight ? { right: position.right } : { left: position.left }),
        width: position.width,
      }}
    >
      {Object.entries(data).map(([groupName, items], index) => {
        const hasGroupName = groupName !== "data";
        const options = (items as Data).map((item, itemIndex) => {
          const itemValue = get(item, "value", item || "");
          const itemLabel = get(item, "label", `${item}`);

          const isSelected = buttonRef.current.innerText === itemLabel;
          return (
            <div
              key={itemIndex}
              onClick={() => {
                onSelect(String(itemValue));
                onClose();
              }}
              className={`select-option ${isSelected ? "active" : ""}`}
            >
              {itemLabel}
            </div>
          );
        });
        return hasGroupName ? (
          <div key={index}>
            <div style={{ padding: "8px", fontWeight: "bold" }}>{groupName}</div>
            {options}
          </div>
        ) : (
          options
        );
      })}
    </div>,
    document.body
  );
}
