import AboutItem from "./AboutItem/AboutItem";

const About = () => {
  const content = [
    "Software developer based in Ilkley, West Yorkshire.",
    "Over 10 year's professional experience working in the Healthcare IT sector using Java and SQL Server.",
    "More recent experience as a full stack web developer. Solid knowledge of HTML, CSS, SASS, JavaScript, Typescript, Vue, Angular, React and Kotlin.",
    "1st class Physics graduate; excellent problem solver.",
    "Semi professional bassist playing regularly throughout the UK with Prince Tribute - EndorphinMachine.",
  ];

  return (
    <>
    <div className="anchor" id="about"/>
    <div className="row bg-blue pt-2 pr-2 pr-sm-0">
      <h3 className="col-12 col-sm-3 align-self-center d-flex justify-content-start justify-content-sm-end">
        About
      </h3>

      <div className="col-12 col-sm-9 bg-white mb-0">
        {content.map((contentText, index) => (
          <AboutItem
            key={index}
            colourClass={index % 2 ? "bg-blue" : "bg-orange"}
            text={contentText}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default About;
