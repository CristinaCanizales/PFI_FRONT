import React, { useState, createContext, useEffect } from "react";
// import { padres, alumnos } from "./dataArrays";
export const DataContext = createContext({});

export function DataProvider(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [novedades, setNovedades] = useState([]);
  const [url, setUrl] = useState("http://192.168.0.182:3000/");

  useEffect(() => {
    console.disableYellowBox = true;
    fetchNovedades();
    console.log("Bievenidos a MyTeamStats");
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        // novedades,
        // setNovedades,
        url,
        setUrl,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );

  // function fetchNovedades() {
  //   fetch(url + "news/")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setNovedades(res);
  //     })
  //     .catch((e) => console.log("Error", e));
  // }
}
