import PropTypes from "prop-types";
export function SelectInput({ name, items, placeholder, title, id, type }) {
  return (
    <>
      <div>
        <label
          htmlFor={type}
          className="block mb-2 text-sm font-medium text-blue"
        >
          {" "}
          {name}
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          id={id}
          placeholder={placeholder}
          name={title}
          required
        >
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

SelectInput.defaultProps = {
  name: "",
  items: [],
  placeholder: "",
  title: "",
  id: "",
  type: "",
};
