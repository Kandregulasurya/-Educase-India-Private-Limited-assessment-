import "./inputField.css";

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="input-wrapper">
      <label className="input-label">
        {label}
      </label>

      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;