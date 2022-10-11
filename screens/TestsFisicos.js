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
          <DataTable.Title textStyle={{ fontSize: 20, fontWeight: "bold" }}>
            Jugador
          </DataTable.Title>
          <DataTable.Title
            numeric
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
          >
            Resistencia
          </DataTable.Title>
          <DataTable.Title
            numeric
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
          >
            Velocidad
          </DataTable.Title>
          <DataTable.Title
            numeric
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
          >
            Salto en alto
          </DataTable.Title>
          <DataTable.Title
            numeric
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
          >
            Salto en largo
          </DataTable.Title>
        </DataTable.Header>

        {testsFisicos.map((item, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell textStyle={{ fontSize: 18 }}>
                {item.jugador.usuario.nombre} {item.jugador.usuario.apellido}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ fontSize: 18 }} numeric>
                {item.resistencia}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ fontSize: 18 }} numeric>
                {item.velocidad}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ fontSize: 18 }} numeric>
                {item.saltoAlto}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ fontSize: 18 }} numeric>
                {item.saltoLargo}
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
