import React, { useEffect, useState } from "react";
import ModalSelector from "react-native-modal-selector";
//galio
import { Block, Text, theme } from "galio-framework";
import { Button, Header, Icon, Input, Select, Switch } from "../components";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125",
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35",
  },
];

export default function CargaDeDatos(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [seleccionado, setSeleccionado] = useState("");

  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      marginTop: 22,
      marginLeft: 50,
      color: argonTheme.COLORS.HEADER,
    },
    group: {
      paddingTop: theme.SIZES.BASE,
    },
    divider: {
      width: "90%",
      borderWidth: 1,
      borderColor: "#E9ECEF",
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure,
    },
    boxReloj: {
      marginLeft: 1000,
      paddingTop: 20,
      paddingLeft: 45,
      width: 200,
      height: 75,
      backgroundColor: "skyblue",
      alignSelf: "flex-end",
      borderRadius: 70,
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
  // const hora = (a) => {
  //   return (
  //     <Text bold size={30} style={styles.boxReloj}>
  //       {`${a}`}
  //     </Text>
  //   );
  // };
  useEffect(() => {
    let timeout = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => window.clearInterval(timeout);
  }, [seleccionado]);

  return (
    <Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          row
          space="between"
          style={[styles.group, { paddingRight: 50, paddingBottom: 30 }]}
        >
          <Text bold size={30} style={styles.boxReloj}>
            {/* {hora(new Date().toLocaleTimeString())} */}
            {`${time}`}
          </Text>
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
              <Block center>
                <Button color="default" style={styles.button}>
                  GOL 6m
                </Button>
              </Block>
              <Block center>
                <Button
                  color="secondary"
                  textStyle={{
                    color: "black",
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                  style={styles.button}
                >
                  GOL 7m
                </Button>
              </Block>
              <Block center>
                <Button style={styles.button}>GOL contra</Button>
              </Block>
              <Block center>
                <Button color="info" style={styles.button}>
                  GOL penal
                </Button>
              </Block>
              <Block center>
                <Button color="success" style={styles.button}>
                  Atajada
                </Button>
              </Block>
              <Block center>
                <Button color="warning" style={styles.button}>
                  Errada
                </Button>
              </Block>
              <Block center>
                <Button color="error" style={styles.button}>
                  Robada
                </Button>
              </Block>
              <Block center>
                <Button color="info" style={styles.button}>
                  Parada
                </Button>
              </Block>
              <Block center>
                <Button color="success" style={styles.button}>
                  Expulsión
                </Button>
              </Block>
              <Block center>
                <Button color="warning" style={styles.button}>
                  Pérdida
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
