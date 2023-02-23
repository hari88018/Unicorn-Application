import React from "react";
import "./home.css";
import Background from "..//../assets/Background.png";

import Group8 from "../../assets/Mask Group 8.png";
import Group10 from "../../assets/Mask Group 10.png";
import Group302 from "../../assets/Group 302.png";
import Group310 from "../../assets/Group 310.png";
import Ellipse10 from "../../assets/Ellipse 10.png";
import Rectangle27 from "../../assets/Rectangle 27.svg";
import Check from "../../assets/Icon awesome-check-circle.svg";
import Group9 from "../../assets/Mask Group 9.png";
import Group303 from "../../assets/Group 303.svg";
import Group304 from "../../assets/Group 304.svg";
import Group305 from "../../assets/Group 305.svg";
import Group306 from "../../assets/Group 306.svg";
import Group307 from "../../assets/Group 307.svg";
import Group308 from "../../assets/Group 308.svg";
import Group312 from "../../assets/Group 312.svg";
import Group311 from "../../assets/Group 311.svg";
import Group74 from "../../assets/Group 74.svg";
import Group309 from "../../assets/Group 309.svg";
import { BsFillHeartFill } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import Path126 from "../../assets/Path 126.svg";
import Path124 from "../../assets/Path 124.svg";
import Path127 from "../../assets/Path 127.svg";
import facebook from "../../assets/Icon awesome-facebook-f.svg";
import linkdin from "../../assets/Icon awesome-linkedin-in.svg";
import twitter from "../../assets/Icon awesome-twitter.svg";
import Group98 from "../../assets/Group 98.svg";
import Rectangle89 from "../../assets/Rectangle 89.png";
import Rectangle89_1 from "../../assets/Rectangle 89-1.png";

const Home = () => {
  return (
    <div className="Home_container" id="home">
      <div className="Home_header">
        <img src={Group8} alt="img" />
        <div className="Home_header-text">
          <h1>
            The Best & Brightest
            <br /> in Life Sciences. <br />
            Working for You.
          </h1>
          <div className="Home_header-button">
            <button className="btn-1">Find Talent</button>
            <button className="btn-2">Find Jobs</button>
          </div>
        </div>
      </div>
      <div className="Home_middler-1">
        <div className="Group302">
          <img src={Group302} alt="" />
        </div>
        <div className="Group302_content">
          <h1>What We Do</h1>
          <img src={Rectangle27} alt="" />
          <div className="para">
            <p>
              At Unicon Pharma, we focus exclusively on Life Sciences—
              <br />
              nothing else. From our inception, we’ve maintained a singular
              <br /> focus on working with Life Science companies and the
              industry’s <br />
              leading candidates.
              <br />
              <br /> Contact us today, stop settling for subpar talent, and
              instead
              <br /> partner with the industry experts and focus more on what
              you do
              <br /> best: growing your business in an effort to improve the
              quality of
              <br /> life for communities around the world.
            </p>
          </div>
          <div className="offerings">
            <h3>Our service offerings include:</h3>
            <div className="check_container">
              <div className="right">
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
              </div>
              <div className="right_containt">
                <p>Temporary/Contract</p>
                <p>Contract-to-permanent / Full-Time</p>
                <p>Permanent/Full-Time</p>
                <p>Functional services (FSP)</p>
              </div>
            </div>
            <div className="check_btn">
              <button className="btn-3">Find Out More About Us</button>
              <button className="btn-4">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Home_middler-2">
        <img src={Group9} alt="" />
        <h2>Practice Areas</h2>
        <div className="categories">
          <div className="cat-1">
            <div className="cat1">
              <img src={Group303} alt="" />
              <p>
                Preclinical & <br />
                Scientific
              </p>
            </div>
            <div className="cat">
              <img src={Group304} alt="" />
              <p>Preclinical & Scientific</p>
            </div>
            <div className="cat">
              <img src={Group307} alt="" />
              <p>Biometrics</p>
            </div>
            <div className="cat">
              <img src={Group308} alt="" />
              <p>Regulatory Affairs</p>
            </div>
          </div>
          <div className="cat-1">
            <div className="cat1">
              <img src={Group74} alt="" />
              <p>
                Drug
                <br /> Safety/PV
              </p>
            </div>
            <div className="cat">
              <img src={Group305} alt="" />
              <p>Medical Affairs</p>
            </div>
            <div className="cat1">
              <img src={Group306} alt="" />
              <p>
                Quality <br />& Compliance
              </p>
            </div>
            <div className="cat">
              <img src={Group309} alt="" />
              <p>Medical Affairs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Home_middler-1">
        <div className="Group302">
          <img src={Group310} alt="" />
        </div>
        <div className="Group302_content">
          <h1>Why Choose Us</h1>
          <img src={Rectangle27} alt="" />
          <div className="para"></div>
          <div className="offerings">
            <div className="check_container">
              <div className="right">
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
                <img src={Check} alt="" />
              </div>
              <div className="right_containt">
                <p>Unparalleled understanding of the life sciences industry</p>
                <p>
                  Extensive database of screened, qualified candidates
                  (180,000+)
                </p>
                <p>Dedicated Client Services and Recruiting Teams</p>
                <p>Proven Success</p>

                <p>Best in class recruiting tools and technology</p>
                <p>Industry's leading network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home_footer">
        <img src={Group10} alt="" />
        <div className="home_float">
          <div style={{ display: "flex", marginLeft: "40px" }}>
            <p>WHAT PEOPLE SAY</p>
          </div>
          <div className="arrow">
            <div style={{ display: "flex", marginLeft: "39px" }}>
              <h1>About Unicon Pharma</h1>
            </div>
            <div style={{ display: "flex", marginLeft: "655px" }}>
              <img src={Group312} alt="" />
              <img src={Group311} alt="" />
            </div>
          </div>
          <div className="Container" style={{ display: "flex", marginTop: "40px" }}>
          <div className="Global">
              <div
                style={{
                  marginTop: "28px",
                  marginRight: "18px",
                  marginLeft: "30px",
                  width: "510px",
                  height: "156px",
                }}
              >
                <p>
                  I've worked with Unicon Pharma for the last few years. They've{" "}
                  <br />
                  been thoroughly professional in their approach and very
                  accommodative. They know the pharmacovigilance business and{" "}
                  <br />
                  provide clear, open communication and set precise
                  expectations.
                  <br /> I would highly recommend them if you are looking for
                  qualified pharmacovigilance resources.
                </p>
              </div>
              <div className="Ellipse">
                <div className="Ellipse1">
                  <img src={Ellipse10} alt="" />
                </div>
                <div>
                  <h2>Global Oncology Company</h2>
                  <p>
                    Associate Director of Pharmacovigilance / Medical Safety
                  </p>
                </div>
              </div>
            </div>
            <div className="Global">
              <div
                style={{
                  marginTop: "28px",
                  marginRight: "18px",
                  marginLeft: "30px",
                  width: "510px",
                  height: "156px",
                }}
              >
                <p>
                  I've worked with Unicon Pharma for the last few years. They've{" "}
                  <br />
                  been thoroughly professional in their approach and very
                  accommodative. They know the pharmacovigilance business and{" "}
                  <br />
                  provide clear, open communication and set precise
                  expectations.
                  <br /> I would highly recommend them if you are looking for
                  qualified pharmacovigilance resources.
                </p>
              </div>
              <div className="Ellipse">
                <div className="Ellipse1">
                  <img src={Ellipse10} alt="" />
                </div>
                <div>
                  <h2>Global Oncology Company</h2>
                  <p>
                    Associate Director of Pharmacovigilance / Medical Safety
                  </p>
                </div>
              </div>
            </div>
          <div className="Global">
              <div
                style={{
                  marginTop: "28px",
                  marginRight: "18px",
                  marginLeft: "30px",
                  width: "510px",
                  height: "156px",
                }}
              >
                <p>
                  I've worked with Unicon Pharma for the last few years. They've{" "}
                  <br />
                  been thoroughly professional in their approach and very
                  accommodative. They know the pharmacovigilance business and{" "}
                  <br />
                  provide clear, open communication and set precise
                  expectations.
                  <br /> I would highly recommend them if you are looking for
                  qualified pharmacovigilance resources.
                </p>
              </div>
              <div className="Ellipse">
                <div className="Ellipse1">
                  <img src={Ellipse10} alt="" />
                </div>
                <div>
                  <h2>Global Oncology Company</h2>
                  <p>
                    Associate Director of Pharmacovigilance / Medical Safety
                  </p>
                </div>
              </div>
            </div>
            <div className="Global">
              <div
                style={{
                  marginTop: "28px",
                  marginRight: "18px",
                  marginLeft: "30px",
                  width: "510px",
                  height: "156px",
                }}
              >
                <p>
                  I've worked with Unicon Pharma for the last few years. They've{" "}
                  <br />
                  been thoroughly professional in their approach and very
                  accommodative. They know the pharmacovigilance business and{" "}
                  <br />
                  provide clear, open communication and set precise
                  expectations.
                  <br /> I would highly recommend them if you are looking for
                  qualified pharmacovigilance resources.
                </p>
              </div>
              <div className="Ellipse">
                <div className="Ellipse1">
                  <img src={Ellipse10} alt="" />
                </div>
                <div>
                  <h2>Global Oncology Company</h2>
                  <p>
                    Associate Director of Pharmacovigilance / Medical Safety
                  </p>
                </div>
              </div>
            </div>
            <div className="Global">
              <div
                className="Item" style={{
                  marginTop: "28px",
                  marginRight: "18px",
                  marginLeft: "30px",
                  width: "510px",
                  height: "156px",
                }}
              >
                <p>
                  I've worked with Unicon Pharma for the last few years. They've{" "}
                  <br />
                  been thoroughly professional in their approach and very
                  accommodative. They know the pharmacovigilance business and{" "}
                  <br />
                  provide clear, open communication and set precise
                  expectations.
                  <br /> I would highly recommend them if you are looking for
                  qualified pharmacovigilance resources.
                </p>
              </div>
              <div className="Ellipse">
                <div className="Ellipse1">
                  <img src={Ellipse10} alt="" />
                </div>
                <div>
                  <h2>Global Oncology Company</h2>
                  <p>
                    Associate Director of Pharmacovigilance / Medical Safety
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourteam_experts_round">
        <div className="heart">
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

export default Home;
