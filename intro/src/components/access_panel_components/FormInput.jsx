import PropTypes from "prop-types";

/**
 * Form Input component.
 * Form input used on all pages of the access panel.
 */
export function FormInput({ type, name, placeholder }) {
  return (
    <div>
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-blue"
      >
        {name}
      </label>
      <input
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        required=""
      />
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
