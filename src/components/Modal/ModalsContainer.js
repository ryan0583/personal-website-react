import MusicModal from "./MusicModal";
import shedmen from "../../music/02 Keeping it True.ogg";
import twentyFifth from "../../music/01 Flicker Fuse.ogg";

const ModalsContainer = () => {
  return (
    <>
      <MusicModal id="musicPopupShedmen" musicSrc={shedmen} />
      <MusicModal id="musicPopup25" musicSrc={twentyFifth} />
    </>
  );
};

export default ModalsContainer;
