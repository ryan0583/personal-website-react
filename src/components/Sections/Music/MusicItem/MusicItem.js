import "./MusicItem.css";

const MusicItem = ({ link, heading, img, description, modal }) => {
  return (
    <a
      class="playMusic expmusic"
      href={link ? link : "#"}
      data-toggle={modal ? "modal" : undefined}
      data-target={modal}
    >
      <div class="row mb-1 bg-white">
        <div class="col-3 col-sm-4 align-self-center d-flex justify-content-start justify-content-sm-end pl-0 pr-0">
          <img alt={heading} class="img-fluid img-music" src={img} />
        </div>
        <div class="col-9 col-sm-8 align-self-center pt-0 pb-0 pl-1 pl-sm-3 pr-1 text-left">
          <h4>{heading}</h4>
          <p class="align-self-center mb-0">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default MusicItem;
