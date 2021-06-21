import React, { useState } from "react";

const Contact = () => {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [records, setRecords] = useState([]);

  const inputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setRegistration({ ...registration, [name]: value });
  };

  const submitFun = (e) => {
    e.preventDefault();

    const newRecord = { ...registration, id: new Date().getTime.toString() };

    setRecords([...records, newRecord]);

    setRegistration({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Reach Us</h1>
        <hr className="w-25 text-center mx-auto" />
      </div>

      <div className="container contact_div nav_bg mb-5">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto d-flex justify-content-center align-items-center">
            <form action="" onSubmit={submitFun} className="w-100">
              <div class="form-group">
                <br></br>
                <input
                  type="text"
                  name="email"
                  value={registration.name}
                  onChange={inputs}
                  class="form-control"
                  placeholder="Enter your Name"
                  autoComplete="off"
                />
              </div>
              <div class="form-group">
                <br></br>
                <input
                  type="text"
                  name="email"
                  value={registration.email}
                  onChange={inputs}
                  class="form-control"
                  placeholder="Enter your Email"
                  autoComplete="off"
                />
              </div>
              <div class="form-group">
                <br></br>
                <input
                  type="number"
                  name="phone"
                  value={registration.phone}
                  onChange={inputs}
                  class="form-control"
                  placeholder="Enter phone number"
                  autoComplete="off"
                />
              </div>
              <div class="form-group">
                <br></br>
                <textarea
                  type="text"
                  name="message"
                  rows="5"
                  value={registration.message}
                  onChange={inputs}
                  class="form-control"
                  placeholder="Enter your message"
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="form-group mt-2">
                <button className="btn btn-outline-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
