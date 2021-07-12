// import React, {Component} from 'react';
import React, { useEffect, useState } from "react";
import AddAppointments from "./components/AddAppointments";
import SearchAppointments from "./components/SearchAppointments";
import ListAppointments from "./components/ListAppointments";
import "./css/App.css";

function App() {
  const [appointments, setAppointments] = useState(null);  
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function spin(time = 1000) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, time);
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
      spin(2000)
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
      spin()
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
useEffect(() =>{
spin(2000)
},[]);
  useEffect(() => {
    getData();
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
          <AddAppointments
            addAppointment={addAppointment}
            isLoading={isLoading}
          />
          <SearchAppointments
            sortAptsBy={sortAptsBy}
            setSearchText={setSearchText}
          />
          <ListAppointments
            appointments={appointments}
            deleteAppointment={deleteAppointment}
            
            
          />
        </div>
      )}
    </div>
  );
}

export default App;
