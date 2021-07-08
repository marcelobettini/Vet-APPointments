function SearchAppointments({sortAptsBy}) {
  
  return (
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-sm-6 ">
          <div className="input-group ">
            <input
              type="text"
              className="form-control me-2"
              aria-label="Search Appointments"
              placeholder="Enter text you want to find"
            />

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="sort-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    className="dropdown-item"
                    value="petName"
                    onClick={(e) => sortAptsBy(e)}
                  >
                    Pet Name
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="ownerName"
                    onClick={(e) => sortAptsBy(e)}
                  >
                    Owner Name
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="aptDate"
                    onClick={(e) => sortAptsBy(e)}
                  >
                    Appointment Date
                  </button>
                </li>
                <div role="separator" className="dropdown-divider" />
                <li>
                  <button className="dropdown-item">Ascending</button>
                </li>
                <li>
                  <button className="dropdown-item">Descending</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchAppointments;
