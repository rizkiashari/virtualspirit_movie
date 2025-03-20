const Card = () => {
  return (
    <div className="max-w-[14rem] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 after:rounded-lg after:transition-all after:duration-300 hover:shadow-xl cursor-pointer">
      <img
        src="/janko.jpg"
        alt="Movie Poster"
        className="w-full h-auto rounded-lg"
      />
      <div className="absolute bottom-3 z-10 px-4 py-2">
        <h2 className="text-white text-md md:text-2xl mb-1">Judul</h2>
        <p className="text-white text-[0.8rem] md:text-md truncate max-w-[10rem]">
          Desc
        </p>
      </div>
    </div>
  );
};

export default Card;
