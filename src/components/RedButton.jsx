const RedButton = ({ type, children, Click, styles }) => {
  return (
    <button
      type={type}
      onClick={Click}
      className={`${styles} rounded-lg px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 border-2 bg-origin-border border-transparent hover:border-2 hover:border-white hover:text-gray-300 `}
    >
      {children}
    </button>
  );
};

export default RedButton;
