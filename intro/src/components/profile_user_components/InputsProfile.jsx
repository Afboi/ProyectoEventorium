import { RadioInput } from "./RadioInput.jsx";
import { StrokeInput } from "./StrokeInput.jsx";
import { SelectInput } from "./SelectInput.jsx";
export function InputsProfile({ items }) {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-64 text-[#6E6E6E]">

                <RadioInput />
                
                {items.map(item => (
                    item.type === "select" ? (
                        <SelectInput
                            key={item.id}
                            title={item.title}
                            options={item.options}
                            placeholder={item.placeholder}
                        />
                    ) : (
                        <StrokeInput
                            key={item.id}
                            title={item.title}
                            type={item.type}
                            placeholder={item.placeholder}
                        />
                    )
                ))}
            </div>
        </div>
    );
}
