import React, { useContext, useState } from "react";

import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import DatePicker from "@dietime/react-native-date-picker";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";
import { DataContext } from "../context";

export default function TestsFisicos(props) {
  const { deportes, jugadores, url } = useContext(DataContext);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [deporteSeleccionado, setDeporteSeleccionado] = useState({});
  const [date, setDate] = useState(new Date());
  const [fecha, setFecha] = useState(new Date());
  const [velocidad, setVelocidad] = useState(0);
  const [resistencia, setResistencia] = useState(0);
  const [saltoAlto, setSaltoAlto] = useState(0);
  const [saltoLargo, setSaltoLargo] = useState(0);
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
  const jugadoresMap = jugadores.map((item, index) => {
    return {
      key: index + 1,
      label: `${item.usuario.nombre} ${item.usuario.apellido}`,
    };
  });
  const deportesMap = deportes.map((item, index) => {
    return { key: index + 1, label: item.nombre };
  });
  // const checkInput = (e) => {
  //   if (!deporte.trim() || !jugador.trim()) {
  //     alert("Por favor, ingrese mínimo jugador y deporte");
  //     return;
  //   }
  //   handleButtonClick();
  // };

  const handleButtonClick = () => {
    const test = {
      // deporteId: deporteSeleccionado.key,
      jugadorId: jugadorSeleccionado.key,
      fechaTest: fecha.toISOString().slice(0, 10),
      velocidad: velocidad,
      resistencia: resistencia,
      saltoAlto: saltoAlto,
      saltoLargo: saltoLargo,
    };
    console.log(test);
    fetch(url + "testsFisicos/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(test),
    })
      .then((data) => {
        console.log("Success:", data);
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
            Deporte:
          </Text>
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
        </Block>
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
            key={jugadorSeleccionado.label}
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
          {/* <Input
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
          /> */}
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
            onChangeText={(text) => setVelocidad(parseInt(text))}
            // value={velocidad}
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
            onChangeText={(text) => setResistencia(parseInt(text))}
            // value={resistencia}
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
            onChangeText={(text) => setSaltoAlto(parseInt(text))}
            // value={saltoAlto}
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
            onChangeText={(text) => setSaltoLargo(parseInt(text))}
            // value={saltoLargo}
          />
        </Block>

        <Button
          style={styles.button}
          textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
          onPress={handleButtonClick}
        >
          Subir resultados
        </Button>
      </Block>
    </ScrollView>
  );
}
