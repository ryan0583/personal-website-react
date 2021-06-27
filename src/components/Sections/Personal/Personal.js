import PersonalItem from "./PersonalItem/PersonalItem";
import PersonalItemLink from "./PersonalItem/PersonalItemLink";

const Personal = () => {
  const content = [
    {
      text: "This website! Uses Bootstrap 4 and React.",
    },
    {
      link: "https://upbeat-kowalevski-135792.netlify.app/",
      text: [
        "Application for viewing stats from the ",
        <PersonalItemLink key="1">2018 World Cup</PersonalItemLink>,
        ", written using React.",
      ],
    },
    {
      link: "http://www.endorphinmachine.co.uk",
      text: [
        "Website for ",
        <PersonalItemLink key="2">
          Prince Tribute - EndorphinMachine
        </PersonalItemLink>,
        ", using Bootstrap and JQuery.",
      ],
    },
    {
      link: "./projects/Calculator/index.html",
      text: [
        "Basic JavaScript ",
        <PersonalItemLink key="3">calculator</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "./projects/VueCalculator/index.html",
      text: [
        "Same ",
        <PersonalItemLink key="4">calculator</PersonalItemLink>,
        " rewritten using Vue.js.",
      ],
    },
    {
      link: "./projects/Invaders/Invaders.jar",
      text: [
        <PersonalItemLink key="5">Space invaders</PersonalItemLink>,
        " style game, written in Java.",
      ],
    },
    {
      link: "./projects/NumberBonds/NumberBonds.jar",
      text: [
        <PersonalItemLink key="6">Number bonds invaders</PersonalItemLink>,
        ". Modified version of the space invaders game.",
      ],
    },
    {
      link: "./projects/Bouncy/bouncy.jar",
      text: [
        "Java application with ",
        <PersonalItemLink key="7">bouncing balls</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "https://scratch.mit.edu/projects/457142389/embed",
      text: [
        "Scratch  ",
        <PersonalItemLink key="8">musical note naming game</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "https://github.com/ryan0583",
      text: [
        "Source code for these and other projects can be found on ",
        <PersonalItemLink key="9">my GitHub</PersonalItemLink>,
        ".",
      ],
    },
  ];

  return (
    <>
    <div className="anchor" id="personal"/>
    <div className="row bg-blue pt-2 pr-2 pr-sm-0">
      <h3 className="col-12 d-sm-none d-flex justify-content-start">
        Personal Projects
      </h3>

      <div className="col-3 align-self-center">
        <div className="row pr-4 pr-md-5 d-none d-sm-flex justify-content-end">
          <h3>Personal</h3>
        </div>
        <div className="row pr-3 pr-md-4 d-none d-sm-flex justify-content-end">
          <h3>Projects</h3>
        </div>
      </div>

      <div className="col-12 col-sm-9 bg-white mb-0">
        {content.map((item, index) => (
          <PersonalItem
            key={index}
            colourClass={index % 2 ? "bg-blue" : "bg-orange"}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Personal;
