import "../css/AddAppointments.css";

const AddAppointments = ({
  addAppointment,
  updateAppointment,
  error,
  isNew,
  setIsNew,
  setError,
  toggleModal,
  setToggleModal,
  id,
  pet_Name,
  owner_Name,
  apt_Notes,
  apt_Date,
  apt_Time,
  setPetName,
  setOwnerName,
  setAptNotes,
  setAptDate,
  setAptTime,
}) => {
  const handleAddAppointment = (event, a, b, c, d, e) => {
    event.preventDefault();
    if (
      typeof a === "undefined" ||
      typeof b === "undefined" ||
      typeof c === "undefined" ||
      typeof d === "undefined" ||
      typeof e === "undefined"
    ) {
      setError("Complete todos los campos");
    } else {
      const aptObject = {
        petName: a,
        ownerName: b,
        aptNotes: c,
        aptDate: `${d} ${e}`,
      };
      setError("");
      if (isNew) {
        addAppointment(aptObject);
      } else {
        console.log(id);
        updateAppointment(aptObject, id);
        setIsNew(true);
      }
    }
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary my-4"
        onClick={() => {
          setToggleModal(!toggleModal);
          setError("");
        }}
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
                onChange={(e) => setPetName(e.target.value)}
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Pet Owner"
                value={owner_Name}
                onChange={(e) => setOwnerName(e.target.value)}
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Notes"
                value={apt_Notes}
                onChange={(e) => setAptNotes(e.target.value)}
              />
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control mb-4"
                    type="date"
                    placeholder="Date"
                    value={apt_Date}
                    onChange={(e) => setAptDate(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control mb-4"
                    type="time"
                    placeholder="Hour"
                    value={apt_Time}
                    onChange={(e) => setAptTime(e.target.value)}
                  />
                </div>
                {error && (
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-label="Warning:"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}
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
