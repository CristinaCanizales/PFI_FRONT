import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import ModalSelector from "react-native-modal-selector";
// Galio components
import { Block, theme } from "galio-framework";
import { Button } from "../components";
// Argon themed components
import DatePicker from "@dietime/react-native-date-picker";
import { DataContext } from "../context";

import FilaPresentismo from "../components/FilaPresentismo";

export default function Presentismo({ route }) {
  const { jugadores, url } = useContext(DataContext);
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
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 200,
      height: 40,
      backgroundColor: "#9bdcfa",
      borderRadius: 5,
    },
    buttonModal: {
      marginBottom: theme.SIZES.BASE,
      backgroundColor: "#9bdcfa",
      width: 200,
      fontSize: 30,
      height: 40,
      marginTop: 15,
    },
  });
  const [date, setDate] = useState(new Date());
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  const jugadoresMap = jugadores.map((item, index) => {
    return {
      key: index + 1,
      label: `${item.usuario.nombre} ${item.usuario.apellido}`,
    };
  });
  function cargarPresentismoAtrasado() {
    const presentismo = {
      fecha: date,
      presente: true,
      usuarioId: jugadorSeleccionado.key,
      // equipoId: jugadorSeleccionado.equipoId,
    };
    fetch(url + "presentismos/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presentismo),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block row center>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ModalSelector
            data={jugadoresMap}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue={jugadorSeleccionado.label || "Seleccionar jugador"}
            margin="50"
            style={styles.modalSelector}
            type="solid"
            key={jugadorSeleccionado}
            onChange={(jugador) => {
              setJugadorSeleccionado(jugador);
            }}
            initValueTextStyle={{
              fontWeight: "500",
              color: "black",
            }}
            optionTextStyle={{ color: "black" }}
            optionContainerStyle={{
              backgroundColor: "white",
              width: 400,
              alignSelf: "center",
              borderColor: "#9bdcfa",
            }}
            cancelContainerStyle={{
              backgroundColor: "#9bdcfa",
              width: 400,
              alignSelf: "center",
            }}
            backdropPressToClose={true}
            cancelText="Cancelar"
          />
        </Block>
        <Block style={{ height: 90 }}>
          <DatePicker
            height={90}
            width={300}
            value={date}
            startYear={2000}
            endYear={2100}
            onChange={(value) => setDate(value)}
            format="dd-mm-yyyy"
          />
        </Block>
        <Button
          style={styles.buttonModal}
          textStyle={{ fontSize: 18, color: "black", fontWeight: "500" }}
          onPress={() => cargarPresentismoAtrasado()}
        >
          Presentismo atrasado
        </Button>
      </Block>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Jugador</DataTable.Title>
          <DataTable.Title>Presente</DataTable.Title>
          <DataTable.Title>Editar</DataTable.Title>
        </DataTable.Header>

        {jugadores.map((item, index) => {
          return <FilaPresentismo key={index} item={item}></FilaPresentismo>;
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
