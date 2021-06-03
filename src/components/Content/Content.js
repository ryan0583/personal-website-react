import About from "../Sections/About/About";
import Experience from "../Sections/Experience/Experience";
import Music from "../Sections/Music/Music";
import Personal from "../Sections/Personal/Personal";

const Content = () => {
  return (
    <div id="content" class="container-fluid">
      <About />
      <Experience />
      <Personal />
      <Music />
    </div>
  );
};

export default Content;
