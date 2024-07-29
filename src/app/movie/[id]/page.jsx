import Image from "next/image";

const MovieDetail = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:mt-10 mb-4 gap-4">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
        />
      </div>
      <div className="max-md:px-3">
        <div>
          <h2 className="text-xl font-bold my-2">{movie.title}</h2>
          {movie.tagline && <p className="tagline">{movie.tagline}</p>}

          <p className="mt-2 mb-5 dark:text-slate-300">{movie.overview}</p>

          {movie.vote_count && (
            <p>
              <strong>Rating:</strong> {movie.vote_average} / 10 (
              {movie.vote_count} votes)
            </p>
          )}
          {movie.release_date && (
            <p className="text-sm my-2">
              <strong>Releasd on:</strong> {movie.release_date}
            </p>
          )}

          {movie.runtime && (
            <p>
              <strong>length:</strong> {movie.runtime} minutes
            </p>
          )}
          {movie.budget && (
            <p>
              <strong>Budget:</strong> ${movie.budget.toLocaleString()}
            </p>
          )}
          {movie.revenue && (
            <p>
              <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
            </p>
          )}

          <p>
            <strong>Production Companies:</strong>{" "}
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
          <p className="my-2">
            <strong>Production Countries:</strong>{" "}
            {movie.production_countries
              .map((country) => country.name)
              .join(", ")}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {movie.spoken_languages.map((lang) => lang.name).join(", ")}
          </p>
        </div>

        <div className="flex gap-3 my-4">
          {movie.genres &&
            movie.genres.map((genre) => (
              <div
                key={genre.name}
                className="px-4 py-1 rounded-md bg-lime-200 dark:bg-lime-400/10 text-sm"
              >
                {genre.name}
              </div>
            ))}
        </div>
        {movie.homepage && (
          <a
            href={movie.homepage}
            target="_blank"
            className="text-blue-700 hover:underline"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        )}
      </div>
    </section>
  );
};

export default MovieDetail;
