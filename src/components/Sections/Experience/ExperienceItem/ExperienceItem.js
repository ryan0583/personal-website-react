import "./ExperienceItem.css";

const ExperienceItem = ({ name, link, img, dates, description }) => {
  return (
    <a class="expmusic" href={link} target="_blank" rel="noreferrer">
      <div class="row pt-2 pt-md-3 pb-1 mb-1 bg-white">
        <div class="col-3 col-sm-4 align-self-center d-flex justify-content-center justify-content-sm-end pl-0 pr-0 pr-sm-3">
          <img alt={name} class="img-fluid img-logo" src={img} />
        </div>
        <div class="col-9 col-sm-8 pl-0 text-left">
          <h4>{dates}</h4>
          <p class="align-self-center mb-2">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ExperienceItem;