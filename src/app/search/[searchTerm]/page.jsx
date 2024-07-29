import Results from "@/components/Results";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <section>
      <Results results={results} />
    </section>
  );
};

export default SearchPage;
