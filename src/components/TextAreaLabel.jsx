const TextAreaLabel = ({
  label,
  textAreaValue,
  textAreaOnChange,
  textAreaName,
  textAreaOnBlur,
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
      <textarea
        className={`${errorStyles} p-1 mt-1 rounded-sm text-gray-900 resize-none h-[9rem]`}
        name={textAreaName}
        value={textAreaValue}
        onChange={textAreaOnChange}
        onBlur={textAreaOnBlur}
      />
    </label>
  );
};

export default TextAreaLabel;
