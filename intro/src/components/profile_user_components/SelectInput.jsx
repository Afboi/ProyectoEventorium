export function SelectInput({ title, options, placeholder }) {
    return (
      <div className="flex flex-col gap-x-64 text-[#6E6E6E]">
        <label className="mb-2">{title}</label>
        <select className="bg-transparent border-[#6E6E6E] text-[#9CA3AF] border-2 rounded-full p-2 mb-4 w-[10.5rem] md:w-64 ">
        <option value="" disabled selected hidden>{placeholder}</option>
          {options.map(option => (
            <option key={option.id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }