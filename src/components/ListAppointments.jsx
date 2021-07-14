import { BsTrash, BsPencilSquare } from "react-icons/bs";
import Moment from "react-moment";
import "../css/ListAppointments.css";
const ListAppointments = ({
  appointments,
  deleteAppointment,  
  setToggleModal,
  setPetName,
  setOwnerName,
  setAptNotes,
  setAptDate,
  setAptTime,
  setIsNew,
  setId,
}) => {
  function editAppointment(id) {
    setIsNew(false);
    const item = appointments.filter((el) => el.id === id);
    setId(id);
    setPetName(item[0].petName);
    setOwnerName(item[0].ownerName);
    setAptNotes(item[0].aptNotes);
    const date_time = item[0].aptDate.split(" ");
    setAptDate(date_time[0]);
    setAptTime(date_time[1]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="container bg-dark py-3">
      <div className="row justify-content-center">
        <div className="col-sm-7">
          {appointments &&
            appointments.map((item) => (
              <div className="card m-4 bg-ligtht" key={item.id}>
                <div className="card-header d-flex justify-content-between">
                  <p className="card-title p-2 display-6">{item.petName}</p>
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm align-self-center me-2"
                        onClick={(ev) => {
                          setToggleModal(true);
                          editAppointment(item.id);
                        }}
                      >
                        <BsPencilSquare fontSize="1.2rem" />
                      </button>
                    </div>

                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm align-self-center"
                        onClick={(ev) => deleteAppointment(item.id)}
                      >
                        <BsTrash fontSize="1.2rem" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text" style={{ fontSize: "1.3rem" }}>
                    {item.aptNotes}
                  </p>

                  <div className="card-footer"></div>
                  <p>
                    Appointed at:{" "}
                    <Moment
                      date={item.aptDate}
                      parse="YYYY-MM-DD hh:mm"
                      format="D-MMM-YYYY H:mm"
                    />
                  </p>
                  <p>Owned by: {item.ownerName}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ListAppointments;
