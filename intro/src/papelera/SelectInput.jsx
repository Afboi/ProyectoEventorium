export function SelectInput({ title, options, placeholder, onChange  }) {
    return (
      <div className="flex flex-col gap-x-64 text-[#6E6E6E] text-center">
        <label className="block text-md-xl font-medium text-blue">{title}</label>
        <select className="text-main-ty-light border-main-ty-light border-2 rounded-full w-[190px] text-center"
        onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled selected hidden>{placeholder}</option>
          {options.map(option => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }