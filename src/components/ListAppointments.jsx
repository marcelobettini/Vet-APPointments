import React from "react";
import { MdClear } from "react-icons/md";
import Moment from "react-moment";
const ListAppointments = ({
  appointments,
  deleteAppointment,
  progressWidth,
}) => {
  return (
    <div className="container bg-dark py-3">
      <div className="row justify-content-center">
        <div className="col-sm-7">
          {/* Solo si lo que está a la izq de && es true, 
          se ejecuta lo que está a la der. Más breve 
          que una ternaria con div vacío si false... sweet */}

          {appointments &&
            appointments
              .sort((a, b) => a.aptDate.localeCompare(b.aptDate))
              .map((item) => (
                <div className="card m-4 bg-ligtht" key={item.id}>
                  <div className="card-header d-flex justify-content-between">
                    <p className="card-title p-2 display-6">{item.petName}</p>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm align-self-center"
                      onClick={(ev) => deleteAppointment(item.id)}
                    >
                      <MdClear />
                    </button>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${progressWidth}%` }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
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
                        parse="YYY-MM-DD hh:mm"
                        format="D-MMM H:mm"
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
