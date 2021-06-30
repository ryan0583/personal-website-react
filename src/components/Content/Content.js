import About from "../Sections/About/About";
import Contact from "../Sections/Contact/Contact";
import Experience from "../Sections/Experience/Experience";
import Music from "../Sections/Music/Music";
import Personal from "../Sections/Personal/Personal";
import "./Content.css";

const Content = () => {
  return (
    <div className="content container-fluid">
      <About />
      <Experience />
      <Personal />
      <Music />
      <Contact />
    </div>
  );
};

export default Content;
