import React, { useContext, useState } from "react";

import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";

export default function TestsFisicos(props) {
  const [saltoLargo, setSaltoLargo] = useState("");
  const [tipo, setTipo] = useState("");
  const [resistencia, setResistencia] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [saltoAlto, setSaltoAlto] = useState("");
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState("");
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
  let indexDeporte = 0;
  const deportes = [
    { key: indexDeporte++, label: "Balonmano" },
    { key: indexDeporte++, label: "Vóleibol" },
    { key: indexDeporte++, label: "Fútbol 5" },
  ];
  let indexJugadores = 0;
  const jugadores = [
    { key: indexJugadores++, label: "Agostina Zorzón" },
    { key: indexJugadores++, label: "Cristina Cañizales" },
    { key: indexJugadores++, label: "Nicolás Dominguez" },
    { key: indexJugadores++, label: "Pierina Tufillaro" },
  ];
  const checkTextInput = (e) => {
    if (!saltoLargo.trim()) {
      alert("Por favor, ingrese el saltoLargo del video");
      return;
    }
    handleButtonClick();
  };

  function handleButtonClick() {
    console.log(videos);
    const nuevoProducto = {
      tituloVideo: saltoLargo,
      tipo: tipo,
      saltoAlto: saltoAlto,
      velocidad: velocidad,
      fecha: fecha,
      video: videos,
    };
    fetch(url + "productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify({ ...nuevoProducto }),
    })
      .then((response) => {
        //console.log(response.status+": "+JSON.stringify(response))
        return response.json();
      })
      .then((data) => {
        console.log("cargue el video!" + JSON.stringify(data));
      });
  }

  return (
    <ScrollView>
      <Block center style={{ marginTop: 20 }}>
        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Deporte:
          </Text>
          <ModalSelector
            data={deportes}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue="Seleccionar deporte"
            margin="50"
            style={styles.modalSelector}
            type="solid"
            key={tipo}
            onChange={(texto) => {
              setTipo(texto.label);
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
            Jugador:
          </Text>
          <ModalSelector
            data={jugadores}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue="Seleccionar jugador"
            margin="50"
            style={styles.modalSelector}
            type="solid"
            key={tipo}
            onChange={(texto) => {
              setTipo(texto.label);
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
            Fecha test:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setFecha(text)}
            value={fecha}
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Velocidad:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setVelocidad(text)}
            value={velocidad}
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Resistencia:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<Block />}
            onChangeText={(text) => setResistencia(text)}
            value={resistencia}
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Salto en alto:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setSaltoAlto(text)}
            value={saltoAlto}
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Salto en largo:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setSaltoLargo(text)}
            value={saltoLargo}
          />
        </Block>

        <Button
          style={styles.button}
          textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
          onPress={checkTextInput}
        >
          Subir resultados
        </Button>
      </Block>
    </ScrollView>
  );
}
