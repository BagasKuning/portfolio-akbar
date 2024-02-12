/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  return (
    <navbar className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex m-auto max-w-[1250px] h-10 items-center justify-between">
      <div className="italic sm:text-lg text-base">Akbar.Dev</div>

      <div className="flex sm:gap-3 gap-2 sm:text-base text-sm">
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
      </div>
    </navbar>
  );
};

export default Navbar;
