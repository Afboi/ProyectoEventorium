export function StrokeInput({ title, placeholder, type, onChange}) {
  return (
    <div className="text-center">
      <p className="block text-md-xl font-medium text-blue">{title}</p>
      <input className="text-main-ty-light border-main-ty-light border-2 rounded-full w-[190px] text-center" type={type}  placeholder={placeholder}
      onChange={onChange}/>
    </div>
  );
}



