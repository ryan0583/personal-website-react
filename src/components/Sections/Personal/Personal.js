import PersonalItem from "./PersonalItem/PersonalItem";

const Personal = () => {
  const content = [
    {
      text: "This website! Uses Bootstrap 4 and React.",
    },
    {
      link: "http://www.endorphinmachine.co.uk",
      text: [
        "Website for ",
        <span class="linkText">Prince Tribute - EndorphinMachine</span>,
        ", using Bootstrap and JQuery.",
      ],
    },
    {
      link: "./projects/Calculator/index.html",
      text: [
        "Basic JavaScript ",
        <span class="linkText">calculator</span>,
        ".",
      ],
    },
    {
      link: "./projects/VueCalculator/index.html",
      text: [
        "Same ",
        <span class="linkText">calculator</span>,
        " rewritten using Vue.js.",
      ],
    },
    {
      link: "./projects/Invaders/Invaders.jar",
      text: [
        <span class="linkText">Space invaders</span>,
        " style game, written in Java.",
      ],
    },
    {
      link: "./projects/NumberBonds/NumberBonds.jar",
      text: [
        <span class="linkText">Number bonds invaders</span>,
        ". Modified version of the space invaders game.",
      ],
    },
    {
      link: "./projects/Bouncy/bouncy.jar",
      text: [
        "Java application with ",
        <span class="linkText">bouncing balls</span>,
        ".",
      ],
    },
    {
      link: "https://scratch.mit.edu/projects/457142389/embed",
      text: [
        "Scratch  ",
        <span class="linkText">musical note naming game</span>,
        ".",
      ],
    },
    {
      link: "https://github.com/ryan0583",
      text: [
        "Source code for these and other projects can be found on ",
        <span class="linkText">my GitHub</span>,
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
