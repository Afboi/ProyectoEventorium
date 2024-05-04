export function FormInput({type, name, placeholder}) {
    return (
        <div>
            <label htmlFor={type} className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
            <input type={type} name={type} id={type} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
        </div>
    );
}