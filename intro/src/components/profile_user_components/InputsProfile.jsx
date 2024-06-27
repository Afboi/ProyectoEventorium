import { physical_activity } from "../access_panel_components/RegisterForm";

// The main InputsProfile component
export function InputsProfile({ objects, data }) {
  //console.log("objetos sin value " + objects);
  // Return the inputs structure.
  return (
    <div className="grid grid-cols-2 mt-8 gap-4">
      {objects.map((input) => (
        <div key={input.id} className="mb-4">
          {/* Label for the input */}
          <label className="block text-[1.50rem] font-medium text-blue">
            {input.title}
          </label>
          {/* Conditionally render select or input based on input type */}
          {input.type === "select" ? (
            // Select input type
            <select
              name={input.name}
              defaultValue={data.value}
              onChange={input.onChange}
              className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full"
            >
              {/* Placeholder option */}
              <option className="hidden" value="">
                {input.placeholder}
              </option>
              {/* Options for select input */}
              {input.options.map((option) =>
                option.value == data.diseases || option.value == data.physical_activity ? (
                  <option key={option.value} value={option.value} selected>
                    {option.label}
                  </option>
                ) : (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                )
              )}
              
            </select>
          ) : (
            // Other input types (text, date, number)
            <input
              name={input.name}
              type={input.type}
              defaultValue={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
              className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}
