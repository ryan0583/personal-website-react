import bjss_logo from "../../../img/bjss_logo.png";
import TPP_Logo from "../../../img/TPP_Logo.jpg";
import statsbomb_logo from "../../../img/statsbomb_logo.png";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
  const jobs = [
    {
      name: "StatsBomb",
      img: statsbomb_logo,
      link: "https://statsbomb.com/",
      dates: "July 2021 - present",
      description: `StatsBomb are football analytics experts. They speicialise in collecting
      and visualising data from matches to help elite football clubs make better
      tactical and transfer market decisions. I work as a senior front end developer on the 
      StatsBomb IQ product.`,
    },
    {
      name: "BJSS",
      img: bjss_logo,
      link: "https://www.bjss.com/",
      dates: "September 2018 - June 2021",
      description: `After taking a 3 month break to spend the summer with my
            children, I started work with BJSS, a software consultant
            headquartered in Leeds. My current engagement is with a large
            media company, developing and maintaining APIs and UIs used
            within the organisation. Previously I worked as a fullstack web
            developer for a large parcel delivery organisation. While
            working here, I have gained skills in Vue, React, Angular,
            Kotlin, Spring, Jenkins, AWS, JUnit and Jest.`,
    },
    {
      name: "TPP",
      img: TPP_Logo,
      link: "https://www.tpp-uk.com/",
      dates: "May 2007 - Jun 2018",
      description: `Clinical software company developing the SystmOne clinical
      record product. SystmOne is used by over 6,000 NHS
      organisations, and holds 44 million patient records in the UK,
      as well as being in use internationally in Qatar and China.`,
    },
  ];

  return (
    <>
    <div className="anchor" id="experience"/>
    <div className="row bg-orange pt-2 pl-2 pl-sm-0">
      <div className="col-12 col-sm-3 align-self-center d-flex justify-content-end justify-content-sm-start order-sm-last">
        <h3>Experience</h3>
      </div>

      <div className="col-12 col-sm-9">
        {jobs.map((job, index) => (
          <ExperienceItem
            key={job.name}
            name={job.name}
            link={job.link}
            img={job.img}
            dates={job.dates}
            description={job.description}
            last={index === jobs.length - 1}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
