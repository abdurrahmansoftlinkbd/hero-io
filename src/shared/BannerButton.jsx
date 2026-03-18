const BannerButton = ({ link, img, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline w-50 py-6 px-5 rounded-md border-[#D2D2D2] text-[##001931] hover:bg-white text-xl font-semibold"
    >
      <img className="w-8 h-8" src={img} alt={text} />
      {text}
    </a>
  );
};

export default BannerButton;
