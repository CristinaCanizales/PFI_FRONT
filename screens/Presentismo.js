import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import resultadosTests from "../constants/resultadosTests";
import { CheckBox } from "@rneui/themed";
import { DataTable } from "react-native-paper";
// Galio components
import { Block } from "galio-framework";
import { Icon } from "../components";
// Argon themed components
import { argonTheme } from "../constants";

const { width } = Dimensions.get("screen");
export default function Presentismo({ route }) {
  const styles = StyleSheet.create({
    home: {
      width: width,
    },
  });

  const optionsPerPage = [2, 3, 4];

  const [check1, setCheck1] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Jugador</DataTable.Title>
          <DataTable.Title>Presente</DataTable.Title>
          <DataTable.Title>Ausente</DataTable.Title>
          <DataTable.Title>Editar</DataTable.Title>
        </DataTable.Header>

        {resultadosTests.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.jugador}</DataTable.Cell>
              <DataTable.Cell>
                <Block
                  middle
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: argonTheme.COLORS.INPUT_SUCCESS,
                  }}
                >
                  <Icon
                    size={11}
                    color={argonTheme.COLORS.ICON}
                    name="g-check"
                    family="ArgonExtra"
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
                    backgroundColor: argonTheme.COLORS.INPUT_ERROR,
                  }}
                >
                  <Icon
                    size={11}
                    color={argonTheme.COLORS.ICON}
                    name="close"
                    family="AntDesign"
                  />
                </Block>
              </DataTable.Cell>
              <DataTable.Cell>
                <CheckBox
                  center
                  title="Click Here"
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                />
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
