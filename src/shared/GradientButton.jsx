const GradientButton = ({ icon, text }) => {
  return (
    <button className="btn rounded-md text-white border-none bg-[linear-gradient(140deg,#632EE3,#9F62F2)]">
      {icon}
      {text}
    </button>
  );
};

export default GradientButton;
