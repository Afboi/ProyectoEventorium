
export function InputsProfile({ objects }) {
  return (
    <div className="grid grid-cols-2 mt-8 gap-4">
      {objects.map((input) => (
        <div key={input.id} className="mb-4">
          <label className="block text-md-xl font-medium text-blue">
            {input.title}
          </label>
          {input.type === "select" ? (
            <select
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full text-center">




              <option value="">{input.placeholder}</option>
              {input.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={input.name}
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
              className="text-main-ty-light border-main-ty-light border-2 rounded-full py-2 px-3 w-full text-center"
            />
          )}
        </div>
      ))}
    </div>
  );
}
