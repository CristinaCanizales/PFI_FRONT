import React, { useState } from "react";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, theme } from "galio-framework";
import { Button, Datos, Videos } from "../components";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
//argon
import { argonTheme } from "../constants";
import { Tab, Text, TabView } from "@rneui/themed";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default function CargaDeDatos(props) {
  const [seleccionado, setSeleccionado] = useState("");
  const [index, setIndex] = useState(0);

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
      padding: 5,
      alignSelf: "center",
      width: 300,
      height: 50,
      backgroundColor: "skyblue",
      borderRadius: 5,
      borderColor: "blue",
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: 200,
    },
  });
  const { navigation } = props;
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
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "darkblue",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Datos"
          titleStyle={{ fontSize: 15 }}
          icon={{
            name: "stats-chart-outline",
            type: "ionicon",
            color: "white",
          }}
        />
        <Tab.Item
          title="Videos"
          titleStyle={{ fontSize: 15 }}
          icon={{ name: "videocam-outline", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Tests físicos"
          titleStyle={{ fontSize: 15 }}
          icon={{ name: "barbell-outline", type: "ionicon", color: "white" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <Datos />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Videos />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
}
