import { ComponentProps, forwardRef, useState } from "react";

interface ISelectOption {
  name: string;
  value: string | number | boolean;
}
interface SelectGroupProps extends Omit<ComponentProps<"div">, "onSelect"> {
  options: ISelectOption[];
  onSelect?: (value: string | number | boolean) => void;
}
const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  (props, ref) => {
    const [selectedOption, setSelectedOption] = useState(0);
    return (
      <div ref={ref} className={`flex gap-2 rounded-3xl bg-slate-800  w-fit  ${props.className} `}>
        {props.options.map((o, i) => (
          <button
            className={`${
              selectedOption == i ? "bg-purple-700" : ""
            } transition-all px-4 sm:px-6 py-1 rounded-3xl`}
            key={o.name}
            onClick={() => {
              setSelectedOption(i);
              props.onSelect && props.onSelect(o.value);
            }}
          >
            {o.name}
          </button>
        ))}
      </div>
    );
  }
);

export default SelectGroup;
