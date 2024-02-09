export const Navbar = () => {
  return (
    <navbar className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex m-auto max-w-[1250px] h-10 items-center justify-between">
      <div className="italic text-lg">Akbar.Dev</div>

      <div className="flex gap-3">
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Resume</a>
      </div>
    </navbar>
  );
};

export default Navbar;
