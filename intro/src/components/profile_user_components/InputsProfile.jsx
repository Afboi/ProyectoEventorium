import { RadioInput } from "./RadioInput.jsx";
import { StrokeInput } from "./StrokeInput.jsx";
import { SelectInput } from "./SelectInput.jsx";
export function InputsProfile({ objects }) {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 md:gap-x-40 text-[#6E6E6E]">

                <RadioInput />
                
                {objects.map(object => (
                    object.type === "select" ? (
                        <SelectInput
                            key={object.id}
                            title={object.title}
                            options={object.options}
                            placeholder={object.placeholder}
                        />
                    ) : (
                        <StrokeInput
                            key={object.id}
                            title={object.title}
                            type={object.type}
                            placeholder={object.placeholder}
                        />
                    )
                ))}
            </div>
        </div>
    );
}
