import NavItem from "@/components/Navbar/components/NavItem";

const Navbar = () => {
  return (
    <div className="flex items-end justify-center gap-6 lg:text-lg p-4 dark:bg-gray-600 bg-amber-100">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
