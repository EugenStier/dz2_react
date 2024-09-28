import { memo } from "react";

function Filter({ onChange }) {
  console.log("FilterUsers was rerendered");
  return (
    <div>
      <input
        onInput={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Введите имя"
      />
    </div>
  );
}
export const FilterUsers = memo(Filter);
