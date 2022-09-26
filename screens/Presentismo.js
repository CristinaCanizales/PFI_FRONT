import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import jugadores from "../constants/jugadores";
import { CheckBox } from "@rneui/themed";
import { DataTable } from "react-native-paper";
import ModalSelector from "react-native-modal-selector";
// Galio components
import { Block, theme } from "galio-framework";
import { Button, Icon } from "../components";
// Argon themed components
import { argonTheme } from "../constants";
import DatePicker from "@dietime/react-native-date-picker";

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
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 300,
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
  const [presente, setPresente] = useState(true);
  const [tipo, setTipo] = useState("");
  const optionsPerPage = [2, 3, 4];
  const [check1, setCheck1] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  const cargarPresentismoAtrasado = () => {
    //TO DO:
    //FETCH POST
  };
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage, check1]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block row center>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <ModalSelector
            data={jugadores}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue="Seleccionar jugador"
            margin="50"
            style={styles.modalSelector}
            type="solid"
            // key={tipo}
            onChange={(texto) => {
              setTipo(texto.label);
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
          onClick={cargarPresentismoAtrasado}
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
