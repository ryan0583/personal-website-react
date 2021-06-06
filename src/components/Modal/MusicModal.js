const MusicModal = ({ id, musicSrc }) => {
  return (
    <div id={id} className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="container-fluid">
            <div className="row d-flex justify-content-end bg-blue">
              <button
                type="button"
                className="rounded-0 btn"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <audio className="col-12" controls>
                  <source src={musicSrc} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicModal;
