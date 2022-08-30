import React, { useState } from "react";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, theme } from "galio-framework";
import { Button, Reloj } from "../components";
import { Dimensions, ScrollView, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default function Datos(props) {
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
  const botones = [
    { color: "default", label: "Gol 7m" },
    { color: "error", label: "Gol 6m" },
    { color: "info", label: "Gol penal" },
    { color: "default", label: "Gol contra" },
    { color: "success", label: "Atajada" },
    { color: "warning", label: "Errada" },
    { color: "error", label: "Robada" },
    { color: "success", label: "Parada" },
    { color: "warning", label: "Expulsión" },
    { color: "error", label: "Pérdida" },
  ];
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
              overlayStyle={{ backgroundColor: "transparent" }}
              data={deportes}
              initValue="Seleccionar deporte"
              margin="50"
              style={styles.modalSelector}
              type="solid"
              // key={tipo}
              onChange={(texto) => {
                setSeleccionado(texto.label);
              }}
              initValueTextStyle={{
                fontWeight: "bold",
                color: "black",
              }}
              optionTextStyle={{ color: "black" }}
              optionContainerStyle={{
                width: 400,
                alignSelf: "center",
              }}
              cancelContainerStyle={{ width: 400, alignSelf: "center" }}
              backdropPressToClose={true}
              cancelText="Cancelar"
            />
            <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
              <Block style={styles.divider} />
            </Block>
            <Block style={{ marginTop: 16, marginBottom: 16 }}>
              <ModalSelector
                overlayStyle={{ backgroundColor: "transparent" }}
                data={jugadores}
                initValue="Seleccionar jugador"
                margin="50"
                style={styles.modalSelector}
                type="solid"
                // key={tipo}
                // onChange={(texto) => {
                //   setTipo(texto.label);
                // }}
                initValueTextStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
                optionTextStyle={{ color: "black" }}
                optionContainerStyle={{
                  width: 400,
                  alignSelf: "center",
                }}
                cancelContainerStyle={{ width: 400, alignSelf: "center" }}
                backdropPressToClose={true}
                cancelText="Cancelar"
              />
            </Block>
            <Block
              row
              space="between"
              style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
            >
              {botones.map((item, index) => {
                return (
                  <Block key={index} center>
                    <Button color={item.color} style={styles.button}>
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
