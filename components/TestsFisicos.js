import React, { useContext, useState } from "react";

import { ScrollView, StyleSheet } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import DatePicker from "@dietime/react-native-date-picker";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";
import { DataContext } from "../context";

export default function TestsFisicos(props) {
  const { currentUser, jugadores, url, setTestsFisicos } =
    useContext(DataContext);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [fecha, setFecha] = useState(new Date());
  const [velocidad, setVelocidad] = useState("");
  const [resistencia, setResistencia] = useState("");
  const [saltoAlto, setSaltoAlto] = useState("");
  const [saltoLargo, setSaltoLargo] = useState("");
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

  function fetchTestsFisicos() {
    fetch(url + "testsFisicos")
      .then((response) => response.json())
      .then((res) => {
        setTestsFisicos(res);
      })
      .catch((e) => console.log("Error", e));
  }
  const checkInput = (e) => {
    if (
      !jugadorSeleccionado ||
      !fecha ||
      !velocidad ||
      !resistencia ||
      !saltoAlto ||
      !saltoLargo
    ) {
      alert("Por favor, ingrese los valores solicitados, o 0 si no aplica.");
      return;
    }
    handleButtonClick();
  };

  const handleButtonClick = () => {
    const test = {
      jugadorId: jugadorSeleccionado.key,
      fechaTest: fecha.toISOString().slice(0, 10),
      velocidad: parseInt(velocidad),
      resistencia: parseInt(resistencia),
      saltoAlto: parseInt(saltoAlto),
      saltoLargo: parseInt(saltoLargo),
    };
    fetch(url + "testsFisicos/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(test),
    })
      .then((data) => {
        alert("¡Resultado subido exitosamente!");
        setJugadorSeleccionado({});
        setFecha(new Date());
        setVelocidad("");
        setResistencia("");
        setSaltoAlto("");
        setSaltoLargo("");
        console.log("Success:", data);
        fetchTestsFisicos();
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
            Fecha test:
          </Text>
          <Block style={{ height: 80 }}>
            <DatePicker
              height={90}
              width={300}
              value={fecha}
              startYear={2000}
              endYear={2100}
              onChange={(value) => setFecha(value)}
              format="dd-mm-yyyy"
            />
          </Block>
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
          onPress={checkInput}
        >
          Subir resultados
        </Button>
      </Block>
    </ScrollView>
  );
}
