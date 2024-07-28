import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto  p-4 flex justify-between items-center">
      <div>
        <Link href="/" className="font-bold text-lg text-lime-600">
          MovieHex.
        </Link>
      </div>
      <nav className="flex items-center gap-5 text-lime-900 dark:text-lime-500">
        <Link
          href="/"
          className="hover:text-lime-600 transition-all duration-200"
        >
          <span className="sm:inline hidden">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 sm:hidden inline hover:bg-lime-100 dark:hover:bg-lime-300/10 hover:text-lime-800 p-1 rounded-full cursor-pointer transition-all duration-300 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <Link
          href="/about"
          className="hover:text-lime-600 transition-all duration-200 pr-5 border-lime-500 border-r"
        >
          <span className="sm:inline hidden">About</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 sm:hidden inline dark:hover:bg-lime-300/10 hover:bg-lime-100 hover:text-lime-800 p-1 rounded-full cursor-pointer transition-all duration-300 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
