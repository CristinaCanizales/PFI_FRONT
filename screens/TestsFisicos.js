import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import resultadosTests from "../constants/resultadosTests";
const { width } = Dimensions.get("screen");
import { DataTable } from "react-native-paper";

export default function TestsFisicos({ route }) {
  const styles = StyleSheet.create({
    home: {
      width: width,
    },
  });

  const optionsPerPage = [2, 3, 4];

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
          <DataTable.Title numeric>Resistencia</DataTable.Title>
          <DataTable.Title numeric>Velocidad</DataTable.Title>
          <DataTable.Title numeric>Salto en alto</DataTable.Title>
          <DataTable.Title numeric>Salto en largo</DataTable.Title>
        </DataTable.Header>

        {resultadosTests.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.jugador}</DataTable.Cell>
              <DataTable.Cell numeric>{item.resistencia}</DataTable.Cell>
              <DataTable.Cell numeric>{item.velocidad}</DataTable.Cell>
              <DataTable.Cell numeric>{item.saltoAlto}</DataTable.Cell>
              <DataTable.Cell numeric>{item.saltoLargo}</DataTable.Cell>
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
