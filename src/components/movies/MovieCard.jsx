const MovieCard = ({ title, genre, rating, poster }) => {
  return (
    <div
      className={`rounded-3xl  overflow-hidden cursor-pointer bg-[#0f1a2e] border border-slate-700 hover:scale-105 transition duration-300`}
    >
      {/* Poster */}
      <div
        className="h-64"
        style={{
          background: `url(${poster})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="p-5 flex justify-between items-end">
        <div className="truncate">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{genre}</p>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 font-medium">
          ⭐ <span className="text-gray-200">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
