import React from "react";
import { useNavigate } from "react-router-dom";
import "./navigation.styles.scss";

const Nav = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => navigate("/");
  const handleNavigateAbout = () => navigate("/about");
  const handleNavigateProject = () => navigate("/project");
  const handleNavigateContact = () => navigate("/contact");
  return (
    <div className="menu">
      <input type="checkbox" id="menu-checkbox" className="hide" />
      <label htmlFor="menu-checkbox" className="toggle-menu dev">
        <div className="btn">
          <i className="menu-icon fas fa-bars menuBtn"></i>
          <i className="menu-icon fas fa-times closeBtn"></i>
        </div>

        <div className="btn" onClick={handleNavigateHome} data-tooltip="Home">
          <i className="menu-icon fas fa-home"></i>
        </div>
        <div className="btn" onClick={handleNavigateAbout} data-tooltip="About">
          <i className="menu-icon fas fa-user"></i>
        </div>
        <div
          className="btn"
          onClick={handleNavigateProject}
          data-tooltip="Projects"
        >
          <i className="menu-icon fas fa-pen"></i>
        </div>

        {/* <div
          className="btn resume"
          onClick={() => {
            const tempLink = document.createElement("a");
            tempLink.setAttribute(
              "href",
              process.env.PUBLIC_URL + "/assets/resume/NTielman.pdf"
            );
            tempLink.setAttribute("download", "NTielman-resume.pdf");
            tempLink.click();
          }}
          data-tooltip="Download Resume"
        >
          <i className="menu-icon fas fa-file"></i>
        </div> */}

        <div
          className="btn"
          onClick={handleNavigateContact}
          data-tooltip="Contact"
        >
          <i className="menu-icon fas fa-envelope-open-text"></i>
        </div>
      </label>
    </div>
  );
};

export default Nav;
