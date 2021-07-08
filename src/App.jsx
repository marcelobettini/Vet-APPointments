// import React, {Component} from 'react';
import React, { useEffect, useState } from "react";
import AddAppointments from "./components/AddAppointments";
import SearchAppointments from "./components/SearchAppointments";
import ListAppointments from "./components/ListAppointments";
import "./css/App.css";

function App() {
  const [appointments, setAppointments] = useState(null);
  // const [deletingRecord, setDeletingRecord] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  function getData(
    url = "https://5fc82e232af77700165ad172.mockapi.io/appointments"
  ) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const data = result
          .sort((a, b) => a.aptDate.localeCompare(b.aptDate))
          .map((item) => {
            return item;
          });
        setAppointments(data);
      })
      .catch((err) => console.log(err));
  }

  const deleteAppointment = (id) => {
    for (let i = 0; i < 100; i++) {
      setProgressWidth(i);
      console.log(`progressWidth: ${progressWidth}`);
      console.log(`iterator: ${i}`);
    }

    fetch(`https://5fc82e232af77700165ad172.mockapi.io/appointments/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.JSON)
      .then((result) => {
        getData();
        return result;
      })
      .catch((er) => console.log(er));
    setProgressWidth(0);
    console.log(progressWidth);
  };

  const addAppointment = (aptObject) => {
    console.log(aptObject);
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
  };

  function sortAptsBy(field) {
    console.log(field);
    let sortedArr = [];
    switch (field) {
      case "petName":
        sortedArr = appointments
          .sort((a, b) => a.petName.localeCompare(b.petName))
          .map((item) => {
            return item;
          });
        break;
      case "ownerName":
        sortedArr = appointments
          .sort((a, b) => a.ownerName.localeCompare(b.ownerName))
          .map((item) => {
            return item;
          });
          break;
      case "aptDate":
        sortedArr = appointments
          .sort((a, b) => a.aptDate.localeCompare(b.aptDate))
          .map((item) => {
            return item;
          });
          break;
      default:
        return appointments;
        
    }

    setAppointments(sortedArr);
    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <AddAppointments addAppointment={addAppointment} />
      <SearchAppointments sortAptsBy={sortAptsBy} />
      <ListAppointments
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        // deletingRecord={deletingRecord}
        progressWidth={progressWidth}
      />
    </div>
  );
}

export default App;
