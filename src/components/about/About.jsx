import React from "react";
import "./About.css";
import arbie from "../../assets/team/arbie.jpg";
import angelo from "../../assets/team/angelo.JPG";
import gerry from "../../assets/team/gerry.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
export const About = () => {
  return (
    <div id="about" className="about-container">
      <h1>About Us</h1>
      <h2>Meet our team</h2>
      <div className="teams-container">
        <div className="team-container">
          <div className="team-img">
            <img src={arbie} />
          </div>
          <h5>Arbie Abesamis</h5>
          <h6>Full-Stack Web Developer</h6>

          <p>
            I am a Full-Stack Web Developer comfortable to work with both front
            and back end programming.
          </p>
          <a
            className="portfolioBtn"
            href="https://portfolio-cnafjnrs5-arbieabesamis27.vercel.app/"
            target="_blank"
          >
            View my Portfolio
          </a>
          <div className="links">
            <a href="https://github.com/arbieabesamis27" target="_blank">
              <GitHubIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/arbie-abesamis-b21975126/"
              target="_blank"
            >
              <LinkedInIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://www.instagram.com/arbie_abesamis/" target="_blank">
              <InstagramIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/arbieabesamis27/" target="_blank">
              <FacebookIcon sx={{ height: "40px", width: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-container">
          <div className="team-img">
            <img src={angelo} />
          </div>
          <h5>Mark Angelo Letada</h5>
          <h6>Full-Stack Web Developer</h6>

          <p>
            I am Full-Stack Web Developer who works with both the front and back
            end of a website.
          </p>
          <a
            className="portfolioBtn"
            href="https://letadz.github.io/portfolio/"
            target="_blank"
          >
            View my Portfolio
          </a>
          <div className="links">
            <a href="https://github.com/letadz" target="_blank">
              <GitHubIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://www.linkedin.com/in/letadz/" target="_blank">
              <LinkedInIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://www.instagram.com/mrkngl_/" target="_blank">
              <InstagramIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/mrkngl1/" target="_blank">
              <FacebookIcon sx={{ height: "40px", width: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-container">
          <div className="team-img">
            <img src={gerry} />
          </div>
          <h5>Gerry Alkuino</h5>
          <h6>Full-Stack Web Developer</h6>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="portfolioBtn" href="#">
            View my Portfolio
          </a>
          <div className="links">
            <a href="#">
              <GitHubIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="#">
              <LinkedInIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="#">
              <InstagramIcon sx={{ height: "40px", width: "40px" }} />
            </a>
            <a href="#">
              <FacebookIcon sx={{ height: "40px", width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
