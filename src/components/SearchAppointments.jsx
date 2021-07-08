function SearchAppointments() {
  function handleClick(e) {
    console.log(e.target.value);
  }
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
                    onClick={handleClick}
                  >
                    Pet Name
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="ownerName"
                    onClick={handleClick}
                  >
                    Owner Name
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="aptDate"
                    onClick={handleClick}
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
