import React, { useState, createContext, useEffect } from "react";
import { LogBox } from "react-native";
export const DataContext = createContext({});

export function DataProvider(props) {
  LogBox.ignoreAllLogs(true);
  const [usuarios, setUsuarios] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [jugadores, setJugadores] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [deportes, setDeportes] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [partidos, setPartidos] = useState([]);
  const [grabaciones, setGrabaciones] = useState([]);
  const [jugadorRutinas, setJugadorRutinas] = useState([]);
  const [jugadorRutinasMap, setJugadorRutinasMap] = useState([]);
  const [entrenamientos, setEntrenamientos] = useState([]);
  const [torneos, setTorneos] = useState([]);
  const [accionesHandball, setAccionesHandball] = useState([]);
  const [accionesFutbol, setAccionesFutbol] = useState([]);
  const [accionesVolleyball, setAccionesVolleyball] = useState([]);
  const [testsFisicos, setTestsFisicos] = useState([]);
  let aux = [];
  // const [url, setUrl] = useState("http://192.168.0.182:8000/");
  const [url, setUrl] = useState("https://myteamstats.up.railway.app/");

  useEffect(() => {
    fetchDeportes();
    fetchJugadores();
    fetchEquipos();
    fetchAccionesHandball();
    fetchAccionesFutbol();
    fetchAccionesVolleyball();
    fetchTestsFisicos();
    fetchPartidos();
    fetchTorneos();
    fetchUsuarios();
    fetchGrabaciones();
    fetchEntrenamientos();
    fetchJugadorRutinas();
    console.log("Bienvenidos a My Team Stats! :)))))");
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        deportes,
        setDeportes,
        equipos,
        setEquipos,
        accionesHandball,
        accionesFutbol,
        accionesVolleyball,
        refresh,
        setRefresh,
        url,
        setUrl,
        testsFisicos,
        setTestsFisicos,
        partidos,
        setPartidos,
        jugadorRutinas,
        setJugadorRutinas,
        jugadorRutinasMap,
        grabaciones,
        setGrabaciones,
        entrenamientos,
        setEntrenamientos,
        torneos,
        setTorneos,
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

  function fetchTorneos() {
    fetch(url + "torneos")
      .then((response) => response.json())
      .then((res) => {
        setTorneos(res);
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

  function fetchPartidos() {
    fetch(url + "partidos")
      .then((response) => response.json())
      .then((res) => {
        setPartidos(res);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchUsuarios() {
    fetch(url + "usuarios")
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

  function fetchJugadorRutinas() {
    fetch(url + "jugadorRutinas")
      .then((response) => response.json())
      .then((res) => {
        setJugadorRutinas(res);
        res.forEach((item, index) => {
          if (item.jugadorId === 1) {
            aux.push(item.entrenamientoId);
          }
        });
        setJugadorRutinasMap(aux);
      })
      .catch((e) => console.log("Error", e));
  }

  function fetchGrabaciones() {
    fetch(url + "grabaciones")
      .then((response) => response.json())
      .then((res) => {
        setGrabaciones(res);
      })
      .catch((e) => console.log("Error", e));
  }
  function fetchEntrenamientos() {
    fetch(url + "entrenamientos")
      .then((response) => response.json())
      .then((res) => {
        setEntrenamientos(res);
      })
      .catch((e) => console.log("Error", e));
  }
  function fetchEquipos() {
    fetch(url + "equipos")
      .then((response) => response.json())
      .then((res) => {
        setEquipos(res);
      })
      .catch((e) => console.log("Error", e));
  }
}
