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
        <PersonalItemLink>2018 World Cup</PersonalItemLink>,
        ", written using React.",
      ],
    },
    {
      link: "http://www.endorphinmachine.co.uk",
      text: [
        "Website for ",
        <PersonalItemLink>Prince Tribute - EndorphinMachine</PersonalItemLink>,
        ", using Bootstrap and JQuery.",
      ],
    },
    {
      link: "./projects/Calculator/index.html",
      text: [
        "Basic JavaScript ",
        <PersonalItemLink>calculator</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "./projects/VueCalculator/index.html",
      text: [
        "Same ",
        <PersonalItemLink>calculator</PersonalItemLink>,
        " rewritten using Vue.js.",
      ],
    },
    {
      link: "./projects/Invaders/Invaders.jar",
      text: [
        <PersonalItemLink>Space invaders</PersonalItemLink>,
        " style game, written in Java.",
      ],
    },
    {
      link: "./projects/NumberBonds/NumberBonds.jar",
      text: [
        <PersonalItemLink>Number bonds invaders</PersonalItemLink>,
        ". Modified version of the space invaders game.",
      ],
    },
    {
      link: "./projects/Bouncy/bouncy.jar",
      text: [
        "Java application with ",
        <PersonalItemLink>bouncing balls</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "https://scratch.mit.edu/projects/457142389/embed",
      text: [
        "Scratch  ",
        <PersonalItemLink>musical note naming game</PersonalItemLink>,
        ".",
      ],
    },
    {
      link: "https://github.com/ryan0583",
      text: [
        "Source code for these and other projects can be found on ",
        <PersonalItemLink>my GitHub</PersonalItemLink>,
        ".",
      ],
    },
  ];

  return (
    <div id="personal" class="row bg-blue pt-2 pr-2 pr-sm-0">
      <h3 class="col-12 d-sm-none d-flex justify-content-start">
        Personal Projects
      </h3>

      <div class="col-3 align-self-center">
        <div class="row pr-4 pr-md-5 d-none d-sm-flex justify-content-end">
          <h3>Personal</h3>
        </div>
        <div class="row pr-3 pr-md-4 d-none d-sm-flex justify-content-end">
          <h3>Projects</h3>
        </div>
      </div>

      <div class="col-12 col-sm-9 bg-white mb-0">
        {content.map((item, index) => (
          <PersonalItem
            colourClass={index % 2 ? "bg-blue" : "bg-orange"}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Personal;
