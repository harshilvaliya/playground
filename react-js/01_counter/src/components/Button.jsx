const Button = ({ btnText, onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
