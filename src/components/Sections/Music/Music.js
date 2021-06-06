import MusicItem from "./MusicItem/MusicItem";
import EM_logo from "../../../img/EM_logo.jpg";
import YSM_logo from "../../../img/YSM_logo.jpg";
import Shedmen_logo from "../../../img/Shedmen_logo.png";
import tf_logo from "../../../img/25_logo.png";
import sa_logo from "../../../img/SA_logo.gif";
import bandcamp_logo from "../../../img/bandcamp_logo.png";

const Music = () => {
  const items = [
    {
      link: "http://www.endorphinmachine.co.uk",
      heading: "EndorphinMachine",
      img: EM_logo,
      description: `9 piece Prince tribute act performing at clubs and festivals
            across the UK. Highlights include Party at the Palace 2018,
            performing alongside Texas.`,
    },
    {
      link: "https://www.yorkstagemusicals.com/",
      heading: "York Stage Musicals",
      img: YSM_logo,
      description: `Regular pit orchestra bass player for this amateur musical 
        theatre society. Shows include Hairspray, Legally Blonde, Rock of Ages
         and Sister Act.`,
    },
    {
      modal: "#musicPopupShedmen",
      heading: "Shedmen",
      img: Shedmen_logo,
      description: `Performed with this hip hop 5 piece in the late 00's. 
        Highlights include supporting Akil the MC of Jurassic 5 at the Parish, 
        Huddersfield.`,
    },
    {
      modal: "#musicPopup25",
      heading: "25th Hour",
      img: tf_logo,
      description: `Born from the ashes of Slightly Alien, 25th Hour was the same 
      band lineup with a change of singer. Recorded two further demos at Airfield 
      Studios.`,
    },
    {
      link: "https://www.youtube.com/watch?v=Yp9D5Y03YwQ&list=PLEPRCv6xbauB4X3inNy8D2spFDe94I7Ki",
      heading: "Sightly Alien",
      img: sa_logo,
      description: `Joined this band in 2002. Relocated from Yorkshire to Cornwall 
        to record and gig full time. Recorded an album, and an EP at Airfield Studios.`,
    },
    {
      link: "https://ryangriffiths.bandcamp.com/",
      heading: "Solo Work",
      img: bandcamp_logo,
      description: `I have several solo instrumental compositions on Bandcamp. These 
        were all recorded using Reason.`,
    },
  ];

  return (
    <div id="music" className="row bg-orange pt-2 pl-2 pl-sm-0">
      <h3 className="col-12 col-sm-3 align-self-center d-flex justify-content-end justify-content-sm-start order-sm-last">
        Music
      </h3>

      <div className="col-sm-9">
        {items.map((item) => (
          <MusicItem
            key={item.heading}
            link={item.link}
            modal={item.modal}
            heading={item.heading}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
