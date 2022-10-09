import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import resultadosTests from "../constants/resultadosTests";
const { width } = Dimensions.get("screen");
import { DataTable } from "react-native-paper";
import { DataContext } from "../context";

export default function TestsFisicos({ route }) {
  const { testsFisicos, jugadores } = useContext(DataContext);

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

        {jugadores.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>
                {item.usuario.nombre} {item.usuario.apellido}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {item.test[0].resistencia}
              </DataTable.Cell>
              <DataTable.Cell numeric>{item.test[0].velocidad}</DataTable.Cell>
              <DataTable.Cell numeric>{item.test[0].saltoAlto}</DataTable.Cell>
              <DataTable.Cell numeric>{item.test[0].saltoLargo}</DataTable.Cell>
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
