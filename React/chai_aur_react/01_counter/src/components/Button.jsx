const Button = ({ btnText, onClick }) => {
  return (
    <button
      type="button"
      className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium font-inherit bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-[#646cff] focus:outline-none focus:ring-4 focus:ring-[#646cff]/50"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
