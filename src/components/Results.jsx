import MovieCard from "./MovieCard";

const Results = ({ results }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto p-4 max-sm:p-0 my-5">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
