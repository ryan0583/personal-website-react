import SocialMedia from "./SocialMedia";
import FacebookWt from "../../img/Facebook-white.svg";
import FacebookCl from "../../img/Facebook-color.svg";
import LinkedinWt from "../../img/LinkedIn-white.svg";
import LinkedinCl from "../../img/LinkedIn-color.svg";
import GithubWt from "../../img/Github-white.svg";
import GithubCl from "../../img/Github-color.svg";
import YoutubeWt from "../../img/Youtube-white.svg";
import YoutubeCl from "../../img/Youtube-color.svg";
import Family from "../../img/Family.jpg";
import "./Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const socialMediaLinks = [
    {
      link: "https://www.facebook.com/ryanmg0583/",
      id: "Facebook",
      imgWt: FacebookWt,
      imgCl: FacebookCl,
    },
    {
      link: "https://www.linkedin.com/in/ryan-griffiths-49553ab8/",
      id: "LinkedIn",
      imgWt: LinkedinWt,
      imgCl: LinkedinCl,
    },
    {
      link: "https://github.com/ryan0583",
      id: "Github",
      imgWt: GithubWt,
      imgCl: GithubCl,
    },
    {
      link: "https://www.youtube.com/channel/UC0lye1efs4AKYTVRCA7ty9A?view_as=subscriber",
      id: "Youtube",
      imgWt: YoutubeWt,
      imgCl: YoutubeCl,
    },
  ];

  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setYPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [yPosition]);

  return (
    <footer className={`bg-orange ${yPosition <= 400 && "beneath"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 pt-2 pl-2 pb-4">
            <div className="thumbnail">
              <img
                className="imgFooter pt-1 pb-1 pl-1 pr-1"
                src={Family}
                alt="Family"
              />
              <div className="caption text-left">
                <p className="hand pl-1 pb-1 mb-0">My awesome family!</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-8 col-md-9">
            {socialMediaLinks.map((socialMedia) => (
              <SocialMedia
                key={socialMedia.id}
                link={socialMedia.link}
                id={socialMedia.id}
                imgWhite={socialMedia.imgWt}
                imgColour={socialMedia.imgCl}
              />
            ))}
          </div>
        </div>
        </div>

        <div className="d-flex justify-content-start pl-2">
          <p className="footer text-white">&copy; Ryan Griffiths</p>
        </div>
    </footer>
  );
};

export default Footer;
