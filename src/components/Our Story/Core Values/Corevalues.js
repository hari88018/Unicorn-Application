import React from "react";
import "./corevalues.css";
import Background from "..//../../assets/Background.png";
import Group7 from "../../../assets/Group 7.png";
import Group328 from "../../../assets/Group 328.svg";
import Group329 from "../../../assets/Group 329.svg";
import Group330 from "../../../assets/Group 330.svg";
import Group331 from "../../../assets/Group 331.svg";
import Group332 from "../../../assets/Group 332.svg";
import Group79 from "../../../assets/Mask Group 79.png";
import { BsFillHeartFill } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Path126 from "../../../assets/Path 126.svg";
import Path124 from "../../../assets/Path 124.svg";
import Path127 from "../../../assets/Path 127.svg";
import Path141 from "../../../assets/Path 141.png";
import facebook from "../../../assets/Icon awesome-facebook-f.svg";
import linkdin from "../../../assets/Icon awesome-linkedin-in.svg";
import twitter from "../../../assets/Icon awesome-twitter.svg";
import Group98 from "../../../assets/Group 98.svg";
import Rectangle89 from "../../../assets/Rectangle 89.png";
import Rectangle89_1 from "../../../assets/Rectangle 89-1.png";

const Corevalues = () => {
  return (
    <div className="Corevalues_container">
      <div className="About_header">
        <img src={Group7} alt="img" />
        <div className="Ourteam_header-text">
          <h2>Core Values</h2>
          <div className="About_header_feet">
            <p>Home</p>
            <img src={Path141} alt="" />
            <p>Our Story</p>
            <img src={Path141} alt="" />
            <p>About Us</p>
          </div>
        </div>
      </div>
      <div className="Core_container">
        <div className="Core_values">
          <img src={Group328} alt="" />
          <p>Integrity</p>
        </div>
        <div className="Core_values">
          <img src={Group329} alt="" />
          <p>Client Focus</p>
        </div>
        <div className="Core_values">
          <img src={Group330} alt="" />
          <p>Excellence</p>
        </div>
        <div className="Core_values">
          <img src={Group331} alt="" />
          <p>Accountability</p>
        </div>
        <div className="Core_values">
          <img src={Group332} alt="" />
          <p>
            Team Spirit &<br /> Collaboration
          </p>
        </div>
      </div>

          <div className="ourteam_experts_round">
              <div className="Group79">
              <img src={Group79} alt="" />
</div>        <div className="heart">
          <div className="mi">
            <BsFillHeartFill className="ourteam_experts_heart" />
          </div>
          <div>
            {" "}
            <h2>50+</h2>
            <p>Clients</p>
          </div>
        </div>
        <div className="lapi">
          <div className="mi">
            <MdLaptopMac className="ourteam_experts_laptop" />
          </div>
          <div>
            {" "}
            <h2>1200+</h2>
            <p>Project Completed</p>
          </div>
        </div>
        <div className="cam">
          <div className="mi">
            <AiFillCamera className="ourteam_experts_camera" />
          </div>
          <div>
            {" "}
            <h2>225</h2>
            <p>Active Consultants</p>
          </div>
        </div>
        <div className="people">
          <div className="mi">
            <BsFillPeopleFill className="ourteam_experts_people" />
          </div>
          <div>
            {" "}
            <h2>180k</h2>
            <p>
              Screened & Qualified Life
              <br />
              Sciences Candidates
            </p>
          </div>
        </div>
      </div>
      <div className="ourteam_experts_info">
        <div className="half">
          <div className="background">
            <img src={Background} alt="" />
          </div>
          <div className="contacts">
            <div className="links">
              <h3>Useful Links </h3>
              <a href="#Our Story">Our Story</a>
              <a href="#Practice Areas">Practice Areas</a>
              <a href="#Careers">Careers</a>
              <a href="#Insights">Insights</a>
              <a href="#Contact Us">Contact Us</a>
            </div>
            <div className="locations">
              <h3>Our Locations</h3>
              <p>New Jersey</p>
              <p>Boston</p>
              <p>Chicago</p>
              <p>Maryland</p>
            </div>
            <div className="contact">
              <div className="contact_us">
                <h3>Contact Us</h3>
              </div>
              <div className="divide">
                <img src={Path126} alt="img" />
                <p>
                  51 Cragwood Rd Suite 101
                  <br />
                  South Plainfield, New Jersey 07080
                </p>
              </div>
              <div className="divide">
                <img src={Path124} alt="img" />
                <p>info@uniconpharma.com</p>
              </div>
              <div className="divide">
                <img src={Path127} alt="img" />
                <p>848-666-0101</p>
              </div>
              <div className="logos">
                <img src={facebook} alt="img" />
                <img src={linkdin} alt="img" />
                <img src={twitter} alt="img" />
              </div>
            </div>
            <div className="ourteam_experts_linkdin">
              <div>
                <div className="linkdin">
                  <img src={Group98} alt="img" />
                  <h2>Linkedin Feed</h2>
                </div>
                <div className="feed_1">
                  <div
                    style={{
                      paddingTop: "10px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                  >
                    <img src={Rectangle89} alt="" />
                  </div>
                  <div>
                    <h3 style={{ color: "#026BA0", fontSize: "19px" }}>
                      Unicon Pharma
                    </h3>
                    <div style={{ fontSize: "16px" }}>
                      Still searching for your <br />
                      dream job? In this article,
                      <br /> IBM Security X-Force
                    </div>
                  </div>
                  <div>
                    <BsLinkedin
                      style={{
                        color: "#026BA0",
                        width: "17px",
                        height: "17px",
                      }}
                    />
                  </div>
                </div>
                <div className="feed_2">
                  <div
                    style={{
                      paddingTop: "10px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                  >
                    <img src={Rectangle89_1} alt="" />
                  </div>
                  <div>
                    <h3 style={{ color: "#026BA0", fontSize: "19px" }}>
                      Unicon Pharma
                    </h3>
                    <div style={{ fontSize: "16px" }}>
                      Still searching for your <br />
                      dream job? In this article,
                      <br /> IBM Security X-Force
                    </div>
                  </div>
                  <div>
                    <BsLinkedin
                      style={{
                        color: "#026BA0",
                        width: "17px",
                        height: "17px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "60px" }}>
          {" "}
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "25px",
                margin: "11px",
                letterspacing: "0px",
                color: "#FFFFFF",
                opacity: "0.5",
              }}
            >
              © Unicon Pharma 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corevalues;
