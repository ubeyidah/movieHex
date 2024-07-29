import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <nav className="flex justify-center gap-6 dark:bg-lime-100/10 bg-lime-100 py-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </nav>
  );
};

export default NavBar;
