// import React, {Component} from 'react';
import React, { useEffect, useState } from "react";
import AddAppointments from "./components/AddAppointments";
import SearchAppointments from "./components/SearchAppointments";
import ListAppointments from "./components/ListAppointments";
import "./css/App.css";

function App() {
  // let apts = []
  const [appointments, setAppointments] = useState([]);
  useEffect( () => {    
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        const apts = Array.from(data.map((el) => {          
          return el;          
        }));       
        setAppointments(JSON.stringify(apts))        
      }, []);
    });
      
  return (
    <div className="App">
      <div>{appointments}</div>
      <AddAppointments />
      <SearchAppointments />
      <ListAppointments />
    </div>
  );
}

export default App;
