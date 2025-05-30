import { useContext } from "react";
import { WorkContext } from "../../context/expContext";
import { Hamburger, Logo, NavbarLinks, ThemeButton } from "./exportNavbar";
import Github from "../Github";
import { Link } from "react-router-dom";

function Navbar() {
  const workContext = useContext(WorkContext);

  return (
    <nav>
      {/* <News /> */}
      <div
        onClick={workContext?.handleRenderDetails}
        className={`flex w-full h- justify-between md:justify-around gap-4 items-center p-5  text-sm md:text-[16px] text-center`}
      >
        <Link to="/" title="Go to home">
          <Logo textSize="heading4" logoSize="size-7 lg:size-10" />
        </Link>
        <div className="md:hidden flex text-center justify-center items-center gap-4 ">
          <ThemeButton />
          <Github />
          <Hamburger />
        </div>
        <div className="hidden md:flex justify-between items-center gap-4">
          <NavbarLinks />
          <ThemeButton />
          <Github />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
