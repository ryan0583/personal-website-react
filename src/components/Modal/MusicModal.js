const MusicModal = ({ id, musicSrc }) => {
  return (
    <div id={id} class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="container-fluid">
            <div class="row d-flex justify-content-end bg-blue">
              <button type="button" class="rounded-0 btn" data-dismiss="modal">
                &times;
              </button>
            </div>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <audio class="col-12" controls>
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
