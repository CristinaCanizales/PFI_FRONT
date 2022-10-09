import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import jugadores from "../constants/jugadores";
import { DataTable } from "react-native-paper";
// Galio components
import { Block, theme } from "galio-framework";
import { Button, Icon } from "../components";
// Argon themed components
import { argonTheme } from "../constants";

export default function FilaPresentismo({ item }) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      backgroundColor: "#9bdcfa",
      textAlign: "center",
      height: 30,
      width: 100,
      alignSelf: "center",
      margin: 10,
    },
  });
  const [presente, setPresente] = useState(true);

  const cargarPresentismoAtrasado = () => {
    //TO DO:
    //FETCH PUT
  };
  return (
    <DataTable.Row>
      <DataTable.Cell>{item.jugador}</DataTable.Cell>
      <DataTable.Cell>
        <Block
          middle
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor:
              presente === true
                ? argonTheme.COLORS.INPUT_SUCCESS
                : argonTheme.COLORS.INPUT_ERROR,
          }}
        >
          {presente === true ? (
            <Icon
              size={11}
              color={argonTheme.COLORS.ICON}
              name="g-check"
              family="ArgonExtra"
            />
          ) : (
            <Icon
              size={11}
              color={argonTheme.COLORS.ICON}
              name="close"
              family="AntDesign"
            />
          )}
        </Block>
      </DataTable.Cell>
      <DataTable.Cell>
        <Button
          style={styles.button}
          textStyle={{
            fontSize: 12,
            fontWeight: "500",
            color: "black",
          }}
          onPress={() =>
            presente === false ? setPresente(true) : setPresente(false)
          }
        >
          Cambiar estado
        </Button>
      </DataTable.Cell>
    </DataTable.Row>
  );
}
