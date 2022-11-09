const InputLabel = ({
  label,
  inputType,
  inputValue,
  inputOnChange,
  inputName,
  inputOnBlur,
  styles,
}) => {
  return (
    <label className={`${styles} flex flex-col`}>
      <span className="ml-1">{label}</span>
      <input
        className="mt-1 rounded-sm text-gray-900 p-1"
        name={inputName}
        type={inputType}
        value={inputValue}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
      />
    </label>
  );
};

export default InputLabel;
