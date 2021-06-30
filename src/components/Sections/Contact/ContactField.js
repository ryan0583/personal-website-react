const ContactField = ({ name, visibleName, type, error }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-9 col-lg-6 form-group">
        <label htmlFor={name}>{visibleName}</label>
        <input
          id={name}
          type={type}
          name={name}
          className="form-control form-control-sm"
          required="required"
          data-error={error}
        />
        <div className="help-block with-errors"></div>
      </div>
    </div>
  );
};

export default ContactField;
