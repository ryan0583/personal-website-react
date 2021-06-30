import "./SocialMedia.css";

const SocialMedia = ({ link, id, imgWhite, imgColour }) => {
  return (
    <div className="social row d-flex justify-content-end pr-3 pt-3">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          alt={id}
          id={id}
          className="socialMedia"
          src={imgWhite}
          onMouseOver={(e) => (e.currentTarget.src = imgColour)}
          onMouseOut={(e) => (e.currentTarget.src = imgWhite)}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
