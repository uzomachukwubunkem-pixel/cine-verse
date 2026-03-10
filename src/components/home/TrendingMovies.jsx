import { useEffect, useState } from "react";
import MovieCard from "../movies/MovieCard";
import { getTrendingMovies } from "../../lib/movie-apis";
import Loader from "../common/Loader";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getTrendingMovies();

      if (result?.data) {
        // update trending movies state
        setTrendingMovies(result.data);
      } else {
        setError(result.error);
        // udpate error state
      }

      setIsLoading(false);
    })();
  }, []);

  return (
    <section className="bg-[#0b162c] min-h-screen px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Trending Now</h2>
        <span className="text-gray-400">Updated daily</span>
      </div>

      {/* Cards */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}
      {trendingMovies && trendingMovies?.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.original_title}
              genre={movie?.genre}
              rating={movie?.rating}
              poster={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TrendingMovies;
