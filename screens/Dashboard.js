import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import estadisticas from "../constants/estadisticas";
const { width } = Dimensions.get("screen");
import { DataTable } from "react-native-paper";
import PowerBIEmbed from "react-native-powerbi";
import WebView from "react-native-webview";

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
      <WebView
        source={{
          // html: '<iframe title="TP_SSD_Final" width="1000" src="https://app.powerbi.com/reportEmbed?reportId=89af8413-5eb8-4f1a-9a5c-5fb7044fb3fc&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" frameborder="0" allowFullScreen="true" ></iframe>',
          html: '<iframe width="1000" height="762" src="https://datastudio.google.com/embed/reporting/11ef993e-f6b6-4a44-888e-ba4b4f13aaf4/page/N7kqC" frameborder="0" style="border:0" allowfullscreen></iframe>',
        }}
        style={{ marginTop: 20, height: 1000 }}
      />
      {/* <PowerBIEmbed
        // accessToken="H4sIAAAAAAAEACVW...NH8v_8HNiWyTi4LAAA="
        embedUrl="https://app.powerbi.com/reportEmbed?reportId=89af8413-5eb8-4f1a-9a5c-5fb7044fb3fc&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed"
        id="89af8413-5eb8-4f1a-9a5c-5fb7044fb3fc"
        style={{ marginTop: 100, height: 200 }}
      /> */}
      {/* <DataTable>
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
      <Image source={require("../assets/Chart.jpeg")} /> */}
    </ScrollView>
  );
}