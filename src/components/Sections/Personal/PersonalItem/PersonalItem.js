import "./PersonalItem.css";

const PersonalItem = ({ colourClass, link, text, last }) => (
  <a className="projects" href={link} target="_blank" rel="noreferrer">
    <div className={`row ${colourClass} pl-3 pl-sm-4 ${!last && "pb-1"}`}>
      <div className="col-12 bg-white pt-2 pb-2 pl-2 pr-1 text-left">
        <p className="pb-0 mb-0">{text}</p>
      </div>
    </div>
  </a>
);

export default PersonalItem;
