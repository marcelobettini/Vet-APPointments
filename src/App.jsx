// import React, {Component} from 'react';
import React, { useEffect, useState } from "react";
import AddAppointments from "./components/AddAppointments";
import SearchAppointments from "./components/SearchAppointments";
import ListAppointments from "./components/ListAppointments";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  const [isNew, setIsNew] = useState(true);
  const [id, setId] = useState("");
  const [pet_Name, setPetName] = useState("");
  const [owner_Name, setOwnerName] = useState("");
  const [apt_Notes, setAptNotes] = useState("");
  const [apt_Date, setAptDate] = useState("");
  const [apt_Time, setAptTime] = useState("");

  const [toggleModal, setToggleModal] = useState(false);
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function cleanFields() {
    setId("");
    setPetName("");
    setOwnerName("");
    setAptNotes("");
    setAptDate("");
    setAptTime("");
  }

  function spin(time = 1000) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, time);
  }

  function reverseOrder() {
    const cloneApt = [...appointments].reverse();
    setAppointments(cloneApt);
  }

  function getData(
    url = "https://5fc82e232af77700165ad172.mockapi.io/appointments"
  ) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const data = result
          .filter((item) => {
            if (searchText === "") {
              return item;
            } else return item.petName.toLowerCase().includes(searchText);
          })
          .sort((a, b) => a.aptDate.localeCompare(b.aptDate))
          .map((item) => {
            return item;
          });
        setAppointments(data);
      })
      .catch((err) => console.log(err));
  }

  const deleteAppointment = (id) => {
    fetch(`https://5fc82e232af77700165ad172.mockapi.io/appointments/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.JSON)
      .then((result) => {
        getData();
        return result;
      })
      .catch((er) => console.log(er));
    spin(2000);
  };

  const addAppointment = (aptObject) => {
    fetch("https://5fc82e232af77700165ad172.mockapi.io/appointments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aptObject),
    })
      .then((response) => response.json())
      .then((result) => {
        getData();
        return result;
      })
      .catch((err) => console.log(err));
    cleanFields();
    spin();
  };

  const updateAppointment = (aptObject, id) => {
    fetch(`https://5fc82e232af77700165ad172.mockapi.io/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aptObject),
    })
      .then((response) => response.json())
      .then((result) => {
        getData();
        return result;
      })
      .catch((err) => console.log(err));
    cleanFields();
    spin();
  };

  function sortAptsBy(field) {
    let sortedArr = [];
    sortedArr = appointments
      .sort((a, b) => a[field].localeCompare(b[field]))
      .map((item) => {
        return item;
      });
    setAppointments(sortedArr);
  }
  useEffect(() => {
    spin(2000);
  }, []);
  useEffect(() => {
    fetch("https://5fc82e232af77700165ad172.mockapi.io/appointments/")
      .then((response) => response.json())
      .then((result) => {
        const data = result
          .filter((item) => {
            if (searchText === "") {
              return item;
            } else return item.petName.toLowerCase().includes(searchText);
          })
          .sort((a, b) => a.aptDate.localeCompare(b.aptDate))
          .map((item) => {
            return item;
          });
        setAppointments(data);
      })
      .catch((err) => console.log(err));
  }, [searchText]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="spinner-container">
          <div className="circle-container">
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <AddAppointments
            addAppointment={addAppointment}
            updateAppointment={updateAppointment}
            isLoading={isLoading}
            error={error}
            setError={setError}
            setSearchText={setSearchText}
            searchText={searchText}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            id={id}
            pet_Name={pet_Name}
            owner_Name={owner_Name}
            apt_Notes={apt_Notes}
            apt_Date={apt_Date}
            apt_Time={apt_Time}
            setPetName={setPetName}
            setOwnerName={setOwnerName}
            setAptNotes={setAptNotes}
            setAptDate={setAptDate}
            setAptTime={setAptTime}
            isNew={isNew}
            setIsNew={setIsNew}
            cleanFields={cleanFields}
          />
          <SearchAppointments
            sortAptsBy={sortAptsBy}
            setSearchText={setSearchText}
            reverseOrder={reverseOrder}
            searchText={searchText}
          />
          <ListAppointments
            appointments={appointments}
            deleteAppointment={deleteAppointment}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            setPetName={setPetName}
            setOwnerName={setOwnerName}
            setAptNotes={setAptNotes}
            setAptDate={setAptDate}
            setAptTime={setAptTime}
            setIsNew={setIsNew}
            setId={setId}
          />
        </div>
      )}
    </div>
  );
}

export default App;
