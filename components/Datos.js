import React, { useState, useContext } from "react";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, theme } from "galio-framework";
import { Button, Reloj } from "../components";
import { ScrollView, StyleSheet } from "react-native";
import { DataContext } from "../context";

export default function Datos(props) {
  const { navigation } = props;
  const {
    accionesHandball,
    accionesFutbol,
    accionesVolleyball,
    deportes,
    jugadores,
    partidos,
    url,
  } = useContext(DataContext);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [partidoSeleccionado, setPartidoSeleccionado] = useState({});
  const [deporteSeleccionado, setDeporteSeleccionado] = useState({});
  const styles = StyleSheet.create({
    group: {
      paddingTop: 10,
    },
    divider: {
      width: "90%",
      borderWidth: 1,
      borderColor: "#E9ECEF",
    },
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 300,
      height: 40,
      backgroundColor: "#9bdcfa",
      borderRadius: 5,
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: 200,
    },
  });
  const colores = [
    "DEFAULT",
    "PRIMARY",
    "INFO",
    "DEFAULT",
    "PRIMARY",
    "INFO",
    "DEFAULT",
    "PRIMARY",
    "INFO",
    "DEFAULT",
    "PRIMARY",
    "INFO",
    "DEFAULT",
    "PRIMARY",
    "INFO",
  ];
  const deportesMap = deportes.map((item, index) => {
    return { key: index + 1, label: item.nombre };
  });
  const partidosMap = partidos.map((item, index) => {
    return { key: index + 1, label: item.fechaPartido };
  });
  const accionesHandballMap = accionesHandball.map((item, index) => {
    return { color: colores[index], label: item.nombre, id: item.id };
  });
  const accionesFutbolMap = accionesFutbol.map((item, index) => {
    return { color: colores[index], label: item.nombre, id: item.id };
  });
  const accionesVolleyballMap = accionesVolleyball.map((item, index) => {
    return { color: colores[index], label: item.nombre, id: item.id };
  });
  const jugadoresMap = jugadores.map((item, index) => {
    return {
      key: index + 1,
      label: `${item.usuario.nombre} ${item.usuario.apellido}`,
    };
  });
  function handleAccion(accionId) {
    const accion = {
      accionId: accionId,
      jugadorId: jugadorSeleccionado.key,
      deporteId: deporteSeleccionado.key,
      partidoId: partidoSeleccionado.key,
    };
    let pathAccion;
    if (deporteSeleccionado.label === "Handball") {
      pathAccion = "handball/nuevo";
    } else if (deporteSeleccionado.label === "Futbol") {
      pathAccion = "futbol/nuevo";
    } else if (deporteSeleccionado.label === "Volleyball") {
      pathAccion = "volleyball/nuevo";
    }
    console.log(accion);
    console.log(url + pathAccion);
    fetch(url + pathAccion, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accion),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          row
          space="between"
          style={[styles.group, { paddingRight: 50, paddingBottom: 10 }]}
        >
          <Reloj />
        </Block>
        <Block>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <ModalSelector
              data={deportesMap}
              overlayStyle={{ backgroundColor: "transparent" }}
              initValue={deporteSeleccionado.label || "Seleccionar deporte"}
              margin="50"
              style={styles.modalSelector}
              type="solid"
              key={deporteSeleccionado}
              onChange={(deporte) => {
                setDeporteSeleccionado(deporte);
              }}
              initValueTextStyle={{
                fontWeight: "500",
                color: "black",
              }}
              optionTextStyle={{ color: "black" }}
              optionContainerStyle={{
                backgroundColor: "white",
                width: 400,
                alignSelf: "center",
                borderColor: "#9bdcfa",
              }}
              cancelContainerStyle={{
                backgroundColor: "#9bdcfa",
                width: 400,
                alignSelf: "center",
              }}
              backdropPressToClose={true}
              cancelText="Cancelar"
            />
            <Block middle style={{ marginTop: 20, marginBottom: 10 }}>
              <Block style={styles.divider} />
            </Block>
            <Block style={{ marginTop: 20, marginBottom: 10 }}>
              <ModalSelector
                data={partidosMap}
                overlayStyle={{ backgroundColor: "transparent" }}
                initValue={partidoSeleccionado.label || "Seleccionar partido"}
                margin="50"
                style={styles.modalSelector}
                type="solid"
                key={partidoSeleccionado.label}
                onChange={(partido) => {
                  setPartidoSeleccionado(partido);
                }}
                initValueTextStyle={{
                  fontWeight: "500",
                  color: "black",
                }}
                optionTextStyle={{ color: "black" }}
                optionContainerStyle={{
                  backgroundColor: "white",
                  width: 400,
                  alignSelf: "center",
                  borderColor: "#9bdcfa",
                }}
                cancelContainerStyle={{
                  backgroundColor: "#9bdcfa",
                  width: 400,
                  alignSelf: "center",
                }}
                backdropPressToClose={true}
                cancelText="Cancelar"
              />
            </Block>
            <Block middle style={{ marginTop: 20, marginBottom: 10 }}>
              <Block style={styles.divider} />
            </Block>
            <Block style={{ marginTop: 20, marginBottom: 10 }}>
              <ModalSelector
                data={jugadoresMap}
                overlayStyle={{ backgroundColor: "transparent" }}
                initValue={jugadorSeleccionado.label || "Seleccionar jugador"}
                margin="50"
                style={styles.modalSelector}
                type="solid"
                key={jugadorSeleccionado}
                onChange={(jugador) => {
                  setJugadorSeleccionado(jugador);
                }}
                initValueTextStyle={{
                  fontWeight: "500",
                  color: "black",
                }}
                optionTextStyle={{ color: "black" }}
                optionContainerStyle={{
                  backgroundColor: "white",
                  width: 400,
                  alignSelf: "center",
                  borderColor: "#9bdcfa",
                }}
                cancelContainerStyle={{
                  backgroundColor: "#9bdcfa",
                  width: 400,
                  alignSelf: "center",
                }}
                backdropPressToClose={true}
                cancelText="Cancelar"
              />
            </Block>
            <Block
              row
              space="between"
              style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
            >
              {deporteSeleccionado.label === "Handball" &&
                accionesHandballMap.map((item, index) => {
                  return (
                    <Block key={index} center>
                      <Button
                        color={item.color}
                        style={styles.button}
                        onPress={(key) => {
                          handleAccion(item.id);
                        }}
                      >
                        {item.label}
                      </Button>
                    </Block>
                  );
                })}
              {deporteSeleccionado.label === "Futbol" &&
                accionesFutbolMap.map((item, index) => {
                  return (
                    <Block key={index} center>
                      <Button
                        color={item.color}
                        style={styles.button}
                        onPress={(key) => {
                          handleAccion(item.id);
                        }}
                      >
                        {item.label}
                      </Button>
                    </Block>
                  );
                })}
              {deporteSeleccionado.label === "Volleyball" &&
                accionesVolleyballMap.map((item, index) => {
                  return (
                    <Block key={index} center>
                      <Button
                        color={item.color}
                        style={styles.button}
                        onPress={(key) => {
                          handleAccion(item.id);
                        }}
                      >
                        {item.label}
                      </Button>
                    </Block>
                  );
                })}
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </>
  );
}
