import React, { useContext } from "react";
import { Dimensions, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { DataContext } from "../context";

export default function TestsFisicos({ route }) {
  const { testsFisicos, currentUser } = useContext(DataContext);

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title textStyle={{ fontSize: 20, fontWeight: "bold" }}>
            Jugador
          </DataTable.Title>
          <DataTable.Title textStyle={{ fontSize: 20, fontWeight: "bold" }}>
            Fecha
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
          if (item.jugador.equipoId == currentUser?.equipoId) {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell textStyle={{ fontSize: 18 }}>
                  {item.jugador.usuario.nombre} {item.jugador.usuario.apellido}
                </DataTable.Cell>
                <DataTable.Cell textStyle={{ fontSize: 18 }}>
                  {item.fechaTest}
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
          }
        })}
      </DataTable>
    </ScrollView>
  );
}
