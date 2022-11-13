const InputLabel = ({
  label,
  inputType,
  inputValue,
  inputOnChange,
  inputName,
  inputOnBlur,
  styles,
  errorform,
  labelStyles,
}) => {
  let errorStyles = "";
  if (errorform) {
    errorStyles = "border-2 border-red-500";
  }
  return (
    <label className={`${styles} flex flex-col`}>
      <span className={`${labelStyles} ml-1`}>{label}</span>
      <input
        className={`${errorStyles} mt-1 rounded-sm text-gray-900 p-1`}
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
