import React, { useState } from "react";
import ModalSelector from "react-native-modal-selector";
import jugadores from "../constants/jugadores";
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
  const { navigation } = props;
  let indexDeporte = 0;
  const deportes = [
    { key: indexDeporte++, label: "Balonmano" },
    { key: indexDeporte++, label: "Vóleibol" },
    { key: indexDeporte++, label: "Fútbol 5" },
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
    { color: "error", label: "Perdida" },
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
              data={deportes}
              overlayStyle={{ backgroundColor: "transparent" }}
              initValue="Seleccionar deporte"
              margin="50"
              style={styles.modalSelector}
              type="solid"
              // key={tipo}
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
            <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
              <Block style={styles.divider} />
            </Block>
            <Block style={{ marginTop: 16, marginBottom: 16 }}>
              <ModalSelector
                data={jugadores}
                overlayStyle={{ backgroundColor: "transparent" }}
                initValue="Seleccionar jugador"
                margin="50"
                style={styles.modalSelector}
                type="solid"
                // key={tipo}
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
