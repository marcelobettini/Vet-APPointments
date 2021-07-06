import React from "react";

const AddAppointments = ({ addAppointment }) => {
  let pet_Name, owner_Name, apt_Notes, apt_Date;

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
      aptDate: apt_Date,
    };
    console.log(aptObject);
    addAppointment(aptObject);
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) =>
          handleAddAppointment(e, pet_Name, owner_Name, apt_Notes, apt_Date)
        }
      >
        <input
          className="form-control"
          type="text"
          placeholder="mascota"
          value={pet_Name}
          onChange={(e) => (pet_Name = e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="dueño"
          value={owner_Name}
          onChange={(e) => (owner_Name = e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="notas"
          value={apt_Notes}
          onChange={(e) => (apt_Notes = e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="día y hora"
          value={apt_Date}
          onChange={(e) => (apt_Date = e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default AddAppointments;
