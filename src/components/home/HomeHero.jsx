import React from "react";

const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Sci-Fi",
  "Romance",
  "Thriller",
  "Animation",
];

const HomeHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#08142b] to-[#2b0d4f] p-10 text-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="rounded-3xl bg-gradient-to-r from-[#17344c] to-[#38435f] p-10 shadow-lg">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Find Your Next Favorite Movie 🎬
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Curated recommendations based on trends, ratings, and genres you
            love.
          </p>

          <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 text-black hover:opacity-90 transition">
            Explore Trending
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-3xl bg-[#050a24] p-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Popular Genres</h2>

          <div className="flex flex-wrap gap-4">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-5 py-3 rounded-full bg-slate-700/40 border border-slate-600 text-gray-200 hover:bg-slate-600 transition cursor-pointer"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
