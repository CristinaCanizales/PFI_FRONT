import React, { useState, createContext, useEffect } from "react";
import { LogBox } from "react-native";
export const DataContext = createContext({});

export function DataProvider(props) {
  LogBox.ignoreAllLogs(true);
  const [currentUser, setCurrentUser] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [deportes, setDeportes] = useState({});
  const [accionesHandball, setAccionesHandball] = useState([]);
  const [accionesFutbol, setAccionesFutbol] = useState([]);
  const [accionesVolleyball, setAccionesVolleyball] = useState([]);
  const [testsFisicos, setTestsFisicos] = useState([]);
  const [url, setUrl] = useState("http://192.168.0.182:8000/");

  useEffect(() => {
    fetchDeportes();
    fetchJugadores();
    fetchAccionesHandball();
    fetchAccionesFutbol();
    fetchAccionesVolleyball();
    fetchTestsFisicos();
    console.log("Bienvenidos a My Team Stats! :)))))");
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        deportes,
        setDeportes,
        accionesHandball,
        accionesFutbol,
        accionesVolleyball,
        url,
        setUrl,
        testsFisicos,
        setTestsFisicos,
        usuarios,
        setUsuarios,
        jugadores,
        setJugadores,
        url,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  function fetchAccionesHandball() {
    fetch(url + "acciones/handball/")
      .then((response) => response.json())
      .then((res) => {
        setAccionesHandball(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchAccionesFutbol() {
    fetch(url + "acciones/futbol/")
      .then((response) => response.json())
      .then((res) => {
        setAccionesFutbol(res);
      })
      .catch((e) => console.log("Error", e));
  }
  function fetchAccionesVolleyball() {
    fetch(url + "acciones/volleyball/")
      .then((response) => response.json())
      .then((res) => {
        setAccionesVolleyball(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchDeportes() {
    fetch(url + "deportes")
      .then((response) => response.json())
      .then((res) => {
        setDeportes(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchTestsFisicos() {
    fetch(url + "testsFisicos")
      .then((response) => response.json())
      .then((res) => {
        setTestsFisicos(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchUsuarios() {
    fetch(url + "users/")
      .then((response) => response.json())
      .then((res) => {
        setUsuarios(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchJugadores() {
    fetch(url + "jugadores")
      .then((response) => response.json())
      .then((res) => {
        setJugadores(res);
      })
      .catch((e) => console.log("Error", e));
  }
}
