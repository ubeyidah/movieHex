const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";
const page = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Faild to fetch movies");
  }
  const results = data.results;
  return (
    <section>
      {results && results.length > 0 ? (
        <Results results={results} />
      ) : (
        <h1 className="text-xl text-center mt-12">No Search Result Found</h1>
      )}
    </section>
  );
};

export default page;
