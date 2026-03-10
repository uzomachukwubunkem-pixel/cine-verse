import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWJkODI2ZTk1MWM2MDQ4OWFlYzJhYTYwZDhjMDQ2MSIsIm5iZiI6MTcxMTAyMjMyMS42NDk5OTk5LCJzdWIiOiI2NWZjMjBmMTBiYzUyOTAxN2NiMDIxYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7cNOX9tPLyi8YQbgErxQQ0pk5upusdXJTlpDqKikRo8",
  },
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options,
    );

    if (
      response?.status === 200 &&
      response?.data &&
      response?.data?.results &&
      response?.data?.results?.length > 0
    ) {
      return { data: response.data.results };
    }
  } catch (error) {
    return { error: error?.message || "Something went wrong" };
  }
};
