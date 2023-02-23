import React, { useState } from "react";
import "./navbar.css";
import flogo from "../../assets/flogo.png";
import { Link } from "react-router-dom";
import StoryDropdown from "../Our Story/StoryDropDownMenu/StoryDropdown";
import CareersDropDown from "../Careers/CareersDropDownMenu/CareersDropDown";
import InsightsDropDown from "../Insights/InsightsDropDown/InsightsDropDown";
import Polygon from "../../assets/Polygon 2.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [Careerdropdown, setCareerDropdown] = useState(false);
  const [Insightsdropdown, setInsightsDropdown] = useState(false);


  return (
    <div className="uni_navbar">
      <Link to={"/"}>
        <img src={flogo} alt="" />
      </Link>
      <div className="uni_navbar-container">
        <ul className="UL">
          <Link to={"/"}>
            <li className="LI">Home</li>
          </Link>
          <Link
           
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <li className="LI">
              Our story
              {dropdown && <StoryDropdown />}
            </li>
          </Link>

          <Link to={"/Pratice Areas"}>
            <li className="LI">Pratice Areas</li>
          </Link>
          <Link
            
            onMouseEnter={() => setCareerDropdown(true)}
            onMouseLeave={() => setCareerDropdown(false)}
          >
            <li className="LI">
              Careers
              {Careerdropdown && <CareersDropDown />}
              
            </li>
            
          </Link>
          <Link 
          onMouseEnter={() => setInsightsDropdown(true)}
          onMouseLeave={() => setInsightsDropdown(false)}>
            <li className="LI">Insights
              { Insightsdropdown &&<InsightsDropDown/>}</li>
          </Link>
          <Link to={"/Contact Us"}>
            <li className="LI">Contact Us</li>
            

          </Link>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
