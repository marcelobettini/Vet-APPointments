import React, { useState } from "react";

const AddAppointments = ({ addAppointment }) => {
  let pet_Name, owner_Name, apt_Notes, apt_Date, apt_Time;

  const [toggleModal, setToggleModal] = useState(false);

  // function uniqueId() {
  //   return Math.round(Math.random() * Date.now());
  // MockAPI gestiona su ID, queda de muestra este código, muy útil}

  const handleAddAppointment = (e, a, b, c, d) => {
    e.preventDefault();
    console.log(a, b, c, d);

    const aptObject = {
      petName: pet_Name,
      ownerName: owner_Name,
      aptNotes: apt_Notes,
      aptDate: `${apt_Date} ${apt_Time}`,
    };
    console.log(aptObject);
    addAppointment(aptObject);
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary my-4"
        onClick={() => setToggleModal(!toggleModal)}
      >
        {!toggleModal ? "Add New Appointment" : "Close New Appointment"}
      </button>
      {toggleModal && (
        <div className="row justify-content-center my-4 ">
          <div className="col-sm-6">
            <form
              className="form-group form-row bg-dark p-3"
              onSubmit={(e) =>
                handleAddAppointment(
                  e,
                  pet_Name,
                  owner_Name,
                  apt_Notes,
                  apt_Date,
                  apt_Time
                )
              }
            >
              <input
                className="form-control my-2"
                type="text"
                placeholder="Pet Name"
                value={pet_Name}
                onChange={(e) => (pet_Name = e.target.value)}
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Pet Owner"
                value={owner_Name}
                onChange={(e) => (owner_Name = e.target.value)}
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Notes"
                value={apt_Notes}
                onChange={(e) => (apt_Notes = e.target.value)}
              />
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control mb-4"
                    type="date"
                    placeholder="Date"
                    value={apt_Date}
                    onChange={(e) => (apt_Date = e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control mb-4"
                    type="time"
                    placeholder="Hour"
                    value={apt_Date}
                    onChange={(e) => (apt_Time = e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-light mb-2 text-danger">
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointments;
