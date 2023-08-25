import { NavLink, Link } from "react-router-dom";
import logo from "/public/assets/shared/logo.svg";
import { useEffect, useState } from "react";
import hmIcon from "/public/assets/shared/icon-hamburger.svg";
import closeIcon from "/public/assets/shared/icon-close.svg";

function Navbar() {
  const [isTablet, setIsTablet] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = (e) => {
    if (e.target.className === "hmIcon") {
      setMenu(true);
    } else if (e.target.className === "closeIcon") {
      setMenu(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth < 821);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isTablet ? (
        <>
          <div className="navContainer">
            <Link to={"/space-tourism-website/"}>
              <img className="logo" src={logo} alt="site-logo" />
            </Link>
            <div className="navLink">
              <NavLink className="navText" to={"/space-tourism-website/"}>
                HOME
              </NavLink>
              <NavLink
                className="navText"
                to={"/space-tourism-website/destination"}
              >
                DESTINATION
              </NavLink>
              <NavLink className="navText" to={"/space-tourism-website/crew"}>
                CREW
              </NavLink>
              <NavLink
                className="navText"
                to={"/space-tourism-website/technology"}
              >
                TECHNOLOGY
              </NavLink>
            </div>
          </div>
          <div className="navLinkMobile">
            {menu ? (
              <div className="navWhenOpen">
                <button className="closeIcon" onClick={handleClick}>
                  <img className="closeIcon" src={closeIcon} alt="" />
                </button>
                <div className="navMobileLinks">
                  <NavLink className="navText" to={"/space-tourism-website/"}>
                    00 HOME
                  </NavLink>
                  <NavLink
                    className="navText"
                    to={"/space-tourism-website/destination"}
                  >
                    01 DESTINATION
                  </NavLink>
                  <NavLink
                    className="navText"
                    to={"/space-tourism-website/crew"}
                  >
                    02 CREW
                  </NavLink>
                  <NavLink
                    className="navText"
                    to={"/space-tourism-website/technology"}
                  >
                    03 TECHNOLOGY
                  </NavLink>
                </div>
              </div>
            ) : (
              <button className="iconMenu" onClick={handleClick}>
                <img className="hmIcon" src={hmIcon} alt="" />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="navContainer">
          <Link to={"/space-tourism-website/"}>
            <img src={logo} alt="site-logo" />
          </Link>
          <div className="navLink">
            <NavLink className="navText" to={"/space-tourism-website/"}>
              00 HOME
            </NavLink>
            <NavLink
              className="navText"
              to={"/space-tourism-website/destination"}
            >
              01 DESTINATION
            </NavLink>
            <NavLink className="navText" to={"/space-tourism-website/crew"}>
              02 CREW
            </NavLink>
            <NavLink
              className="navText"
              to={"/space-tourism-website/technology"}
            >
              03 TECHNOLOGY
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
