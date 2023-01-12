import React from "react";
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <div className="container-contact">
        <div className="container-contact-line1">
          <div className="container-name">
            <form> Name </form>
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="container-email">
            <form> Email </form>
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>

        <br />
        <div className="container-message">
          <form> Message </form>
          <textarea
            placeholder=" Type message here... "
            onChange={handleChange}
            name="message"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
}
