import React from "react";
import Group7 from "../../../../assets/Group 7.png";
import Rectangle from "../../../../assets/Rectangle 143.png";
import Group115 from "../../../../assets/Group 115.svg";
import Group116 from "../../../../assets/Group 116.svg";
import Group113 from "../../../../assets/Group 113.svg";
import { BsFillHeartFill } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import Background from "..//../../../assets/Background.png";
import Path126 from "../../../../assets/Path 126.svg";
import Path124 from "../../../../assets/Path 124.svg";
import Path127 from "../../../../assets/Path 127.svg";
import facebook from "../../../../assets/Icon awesome-facebook-f.svg";
import linkdin from "../../../../assets/Icon awesome-linkedin-in.svg";
import twitter from "../../../../assets/Icon awesome-twitter.svg";
import Group98 from "../../../../assets/Group 98.svg";
import Rectangle89 from "../../../../assets/Rectangle 89.png";
import Rectangle89_1 from "../../../../assets/Rectangle 89-1.png";

import "./ourteam_experts.css";

const ourteam_experts = () => {
  return (
    <div className="ourteam_experts_container">
      <div className="ourteam_experts_group7">
        <img src={Group7} alt="" />
      </div>
      <div className="ourteam_experts_rectangle">
        <div>
          {" "}
          <img src={Rectangle} alt="" />
        </div>
        <div className="rectangle">
          {" "}
          <h1>Raju Lakkamraju</h1>
          <p>Director</p>
        </div>
      </div>
      <div className="ourteam_experts-content">
        <div className="ourteam_experts-content_reader">
          <div className="ourteam_experts-content_para">
            <p>
              Raju has over 19 years of experience in business management,
              strategy, accounting, and finance. He plays a strategic role in
              corporate growth and development, including guidance to the
              Finance, HR, Compliance, and Business development teams. He
              focuses on ensuring sustainable growth and driving long-term
              shareholder value. He is a member of our management committee and
              chair our corporate growth and Finance and CSR committees.
              <br /> <br />
              Mr. Lakkamraju is a Chartered Accountant and holds a CA degree
              from the Institute of Chartered Accountants of India. Besides
              work, he enjoys playing sports, reading books, and investing.
            </p>
          </div>
          <div className="ourteam_experts_smedia">
            <img src={Group115} alt="img" />
            <p>raju@uniconpharma.com</p>
            <img src={Group116} alt="img" />
            <p>(848) 666-0101</p>
            <img src={Group113} alt="img" />
            <p>Follow Linkedin</p>
          </div>

          <div className="ourteam_experts_back">
            <a href="Back to Team">Back to Team</a>
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

export default ourteam_experts;
