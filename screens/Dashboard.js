import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import estadisticas from "../constants/estadisticas";
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
          <DataTable.Title numeric>Goles</DataTable.Title>
          <DataTable.Title numeric>Gol 6m</DataTable.Title>
          <DataTable.Title numeric>Gol 9m</DataTable.Title>
          <DataTable.Title numeric>Gol contra</DataTable.Title>
          <DataTable.Title numeric>Gol penal</DataTable.Title>
          <DataTable.Title numeric>Erradas</DataTable.Title>
          <DataTable.Title numeric>Atajadas</DataTable.Title>
          <DataTable.Title numeric>Robadas</DataTable.Title>
          <DataTable.Title numeric>Perdidas</DataTable.Title>
          <DataTable.Title numeric>Efectividad</DataTable.Title>
        </DataTable.Header>

        {estadisticas.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.jugador}</DataTable.Cell>
              <DataTable.Cell numeric>{item.goles}</DataTable.Cell>
              <DataTable.Cell numeric>{item.gol6m}</DataTable.Cell>
              <DataTable.Cell numeric>{item.gol9m}</DataTable.Cell>
              <DataTable.Cell numeric>{item.golContra}</DataTable.Cell>
              <DataTable.Cell numeric>{item.golPenal}</DataTable.Cell>
              <DataTable.Cell numeric>{item.erradas}</DataTable.Cell>
              <DataTable.Cell numeric>{item.atajadas}</DataTable.Cell>
              <DataTable.Cell numeric>{item.robadas}</DataTable.Cell>
              <DataTable.Cell numeric>{item.perdidas}</DataTable.Cell>
              <DataTable.Cell numeric>{item.efectividad}</DataTable.Cell>
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
      <Image source={require("../assets/Chart.jpeg")} />
    </ScrollView>
  );
}
