/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  return (
    <navbar className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex m-auto max-w-[1250px] h-10 items-center justify-between">
      <div className="italic text-lg">Akbar.Dev</div>

      <div className="flex gap-3">
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
      </div>
    </navbar>
  );
};

export default Navbar;
