import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#0b1f3a] to-[#2e1065] px-6 py-3 flex items-center justify-between">
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center font-bold text-white">
          CV
        </div>

        <h1 className="text-white text-xl font-semibold tracking-wide">
          CineVerse
        </h1>
      </div>

      {/* Search */}
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search movies, genres, actors..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-[#020617] text-gray-200 placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </header>
  );
};

export default Header;
