import React, { useContext, useState } from "react";

import { ScrollView, StyleSheet } from "react-native";
import { Button } from "../components";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { DataContext } from "../context";

export default function RutinaJugador(props) {
  const { currentUser, entrenamientos, jugadores, url } =
    useContext(DataContext);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState({});
  const styles = StyleSheet.create({
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 300,
      height: 40,
      backgroundColor: "#9bdcfa",
      borderRadius: 5,
    },
    buttonVideo: {
      borderRadius: 10,
      alignSelf: "center",
      width: 200,
      height: 200,
    },
    button: {
      borderRadius: 20,
      backgroundColor: "#9bdcfa",
      textAlign: "center",
      width: 300,
      alignSelf: "center",
      margin: 10,
    },
  });
  const jugadoresMap = jugadores.reduce((acc, item) => {
    if (item.equipoId === currentUser?.equipoId)
      acc.push({
        key: item.id,
        label: `${item.usuario.nombre} ${item.usuario.apellido}`,
      });
    return acc;
  }, []);

  const entrenamientosMap = entrenamientos.map((item, index) => {
    return {
      key: index + 1,
      label: item.titulo,
    };
  });

  const checkInput = (e) => {
    if (!jugadorSeleccionado || !rutinaSeleccionada) {
      alert("Por favor, seleccione un jugador y una rutina.");
      return;
    }
    handleButtonClick();
  };

  const handleButtonClick = () => {
    const jugadorRutina = {
      jugadorId: jugadorSeleccionado.key,
      rutinaId: rutinaSeleccionada.key,
    };
    fetch(url + "jugadorRutinas/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(jugadorRutina),
    })
      .then((data) => {
        alert(
          `Rutina de ${rutinaSeleccionada.label} asociada al ${jugadorSeleccionado.label} exitosamente.`
        );
        console.log("Success:", data);
        setRutinaSeleccionada({});
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ScrollView>
      <Block center style={{ marginTop: 20 }}>
        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Jugador:
          </Text>
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
        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Entrenamiento:
          </Text>
          <ModalSelector
            data={entrenamientosMap}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue={rutinaSeleccionada.label || "Seleccionar rutina"}
            margin="50"
            style={styles.modalSelector}
            type="solid"
            key={rutinaSeleccionada}
            onChange={(jugador) => {
              setRutinaSeleccionada(jugador);
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

        <Button
          style={styles.button}
          textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
          onPress={checkInput}
        >
          Cargar
        </Button>
      </Block>
    </ScrollView>
  );
}
