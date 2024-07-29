"use client";

const error = ({ error, reset }) => {
  return (
    <section className="flex flex-col gap-4  justify-center items-center min-h-[60vh] text-center">
      <h1 className="text-2xl font-bold text-center text-red-600">
        Oops! Something Went Wrong
      </h1>
      <p>
        It looks like something went wrong on our end. <br /> Don't worry, our
        team is already on it! Please try agian or coming back later.
      </p>
      <button
        onClick={() => reset()}
        className="bg-lime-300 text-black px-8 py-3 rounded-lg"
      >
        Try again
      </button>
    </section>
  );
};

export default error;
