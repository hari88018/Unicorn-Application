
import React, { useState } from "react";
import "./ourteam.css";
import Background from "..//../../assets/Background.png";

import Group7 from "../../../assets/Group 7.png";
import Group113 from "../../../assets/Group 113.svg";
import Group115 from "../../../assets/Group 115.svg";
import Group116 from "../../../assets/Group 116.svg";

import Group42 from "../../../assets/Mask Group 42.png";
import Rectangle139 from "../../../assets/Rectangle 139.png";
import Rectangle100 from "../../../assets/Rectangle 100.png";
import Rectangle147 from "../../../assets/Rectangle 147.png";
import Rectangle150 from "../../../assets/Rectangle 150.png";
import Rectangle140 from "../../../assets/Rectangle 140.png";
import Rectangle144 from "../../../assets/Rectangle 144.png";
import Rectangle148 from "../../../assets/Rectangle 148.png";
import Rectangle151 from "../../../assets/Rectangle 151.png";
import Rectangle141 from "../../../assets/Rectangle 141.png";
import Rectangle145 from "../../../assets/Rectangle 145.png";
import Rectangle149 from "../../../assets/Rectangle 149.png";
import Rectangle152 from "../../../assets/Rectangle 152.png";
import Rectangle142 from "../../../assets/Rectangle 142.png";
import Rectangle146 from "../../../assets/Rectangle 146.png";
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
import { useNavigate} from "react-router-dom"



const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="About_container">
      <div className="About_header">
        <img src={Group7} alt="img" />
        <div className="Ourteam_header-text">
                  <h2>Our Team
                   
                  </h2>
                  <div className="About_header_feet">
                      <p>Home</p>
                      <img src={Path141} alt="" />
                      <p>Our Story</p>
                      <img src={Path141} alt="" />
                      <p>About Us</p></div>
      
        </div>
      </div>
      <div className="Ourteam_middler">
              <div className="Our_Containt"><h1>Meet Your Industry Experts</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the <br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/> make a type specimen book.</p></div>
          </div>
          <div className="Ourteam_Container">
        <div className="team1">
          
                  <div className="boxing">
                      <img src={Rectangle139} alt="" className="absalute" />
                      <div className="details">
                          <h2>Ravi K Kollipara</h2>
                          <p>C.E.O.</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                     
                  </div>
                  <div onClick={()=>navigate("/Ourteam_experts")} className="boxing">
                  <img  src={Rectangle100} alt="" className="absalute" />
                      <div className="details">
                          <h2>Raju Lakkamraju</h2>
                          <p>Director</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle147} alt="" className="absalute" />
                      <div className="details_">
                          <h2>Jessica Bramowicz-Petty</h2>
                          <p>Sr. Director, Business Development</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle150} alt="" className="absalute" />
                      <div className="details_">
                          <h2>Bryan Foley</h2>
                          <p>Sr. Director, Business Development</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
        </div>
        <div className="team2">
        <div className="boxing">
                      <img src={Rectangle140} alt="" className="absalute" />
                      <div className="details_">
                          <h2>Michael Celata</h2>
                          <p>Sr. Director, Business Development</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                     
                  </div>
                  <div className="boxing">
                  <img src={Rectangle144} alt="" className="absalute" />
                      <div className="details_">
                          <h2>Michael Ganovski</h2>
                          <p>Sr. Director, Business Development</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle148} alt="" className="absalute" />
                      <div className="details">
                          <h2>Sriharsha Vasireddy</h2>
                          <p>Director, Client Services</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle151} alt="" className="absalute" />
                      <div className="details_">
                          <h2>Harshavardhan Garapati</h2>
                          <p>Client Services Representative</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
        </div>
        <div className="team3">
        <div className="boxing">
                      <img src={Rectangle141} alt="" className="absalute" />
                      <div className="details__">
                          <h2>Pani Madiwada</h2>
                          <p>Manager, Human Resources</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                     
                  </div>
                  <div className="boxing">
                  <img src={Rectangle145} alt="" className="absalute" />
                      <div className="details">
                          <h2>Manasi Warik</h2>
                          <p>HR Generalist</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle149} alt="" className="absalute" />
                      <div className="details">
                          <h2>Jorge Brizuela</h2>
                          <p>Sr. Clinical Recruiter</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>
                  <div className="boxing">
                  <img src={Rectangle152} alt="" className="absalute" />
                      <div className="details">
                          <h2>Castin Nichols</h2>
                          <p>Sr. Clinical Recruiter</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                  </div>

        </div>
        <div className="team4">
        <div className="boxing">
                      <img src={Rectangle142} alt="" className="absalute" />
                      <div className="details">
                          <h2>Sean Begely</h2>
                          <p>Clinical Recruiter</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
                     
                  </div>
                  <div className="boxing">
                  <img src={Rectangle146} alt="" className="absalute" />
                      <div className="details">
                          <h2>Noah Dresser</h2>
                          <p>Sr. Clinical Recruiter</p>
                          <div className="d_icons"><img src={Group113} alt="" />
                          <img src={Group115} alt="" /><img src={Group116} alt="" /></div>
                      </div>
                     
                      <img  src={Group42} alt="" />
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



  

export default OurTeam
