import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import jugadores from "../constants/jugadores";
import { CheckBox } from "@rneui/themed";
import { DataTable } from "react-native-paper";
// Galio components
import { Block } from "galio-framework";
import { Button, Icon, Input } from "../components";
// Argon themed components
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");
export default function Presentismo({ route }) {
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
  const [fecha, setFecha] = useState(new Date().toLocaleDateString());
  const optionsPerPage = [2, 3, 4];
  const [check1, setCheck1] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage, check1]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Jugador</DataTable.Title>
          <DataTable.Title>Fecha</DataTable.Title>
          <DataTable.Title>Presente</DataTable.Title>
          <DataTable.Title>Editar</DataTable.Title>
        </DataTable.Header>

        {jugadores.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.jugador}</DataTable.Cell>
              <DataTable.Cell>
                <Block center style={{ height: 30 }}>
                  <Input
                    placeholder={new Date().toLocaleDateString()}
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
              </DataTable.Cell>
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
                {/* <CheckBox
                  center
                  checked={item.presente}
                  onPress={() => setCheck1(!check1)}
                /> */}
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
        })}

        <DataTable.Pagination
          page={page}
          numberOfPages={2}
          onPageChange={(page) => setPage(page)}
          label="1-2 de 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Filas por página"}
        />
      </DataTable>
    </ScrollView>
  );
}
