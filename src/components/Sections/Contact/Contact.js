import ContactField from "./ContactField";

const Contact = () => {
  return (
    <>
    <div className="anchor" id="contact"/>
    <div className="row bg-blue pt-2 pr-2 pr-sm-0">
      <h3 className="col-sm-3 align-self-center d-flex justify-content-start justify-content-sm-end">
        Contact
      </h3>

      <div className="col-12 col-sm-9 bg-white pt-2 pt-sm-1 pb-2 mb-0">
        <form
          id="contact-form"
          action="https://formspree.io/xdowprbl"
          method="post"
        >
          <div className="controls text-left">
            <ContactField
              name="first_name"
              visibleName="Firstname *"
              type="text"
              error="Firstname is required."
            />
            <ContactField
              name="last_name"
              visibleName="Lastname *"
              type="text"
              error="Lastname is required"
            />
            <ContactField
              name="email"
              visibleName="Email *"
              type="email"
              error="Valid email is required"
            />
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="form_message">Message *</label>
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control form-control-sm"
                    rows="4"
                    required="required"
                    data-error="Please, leave us a message."
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <input
                  type="submit"
                  className="btn btn-send rounded-0"
                  value="Send message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
