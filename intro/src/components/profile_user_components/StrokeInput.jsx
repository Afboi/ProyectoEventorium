export function StrokeInput({ title, placeholder, type}) {
  return (
    <div>
      <p className="mb-2">{title}</p>
      <input className="bg-transparent border-[#6E6E6E] border-2 rounded-full p-2 mb-4 w-[10.5rem] md:w-64" type={type}  placeholder={placeholder}/>
    </div>
  );
}



