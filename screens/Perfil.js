import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Icon } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { DataTable } from "react-native-paper";
import { DataContext } from "../context";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default function Perfil(props) {
  const { currentUser, jugadorRutinasMap, entrenamientos, url } =
    useContext(DataContext);

  const styles = StyleSheet.create({
    profile: {
      marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
      // marginBottom: -HeaderHeight * 2,
      flex: 1,
    },
    profileContainer: {
      width: width,
      height: height,
      padding: 0,
      zIndex: 1,
    },
    profileBackground: {
      width: width,
      height: height / 2,
    },
    profileCard: {
      // position: "relative",
      padding: theme.SIZES.BASE,
      marginHorizontal: theme.SIZES.BASE,
      marginTop: 65,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      zIndex: 2,
    },
    info: {
      paddingHorizontal: 40,
    },
    avatarContainer: {
      position: "relative",
      marginTop: -80,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 70,
      borderWidth: 0,
    },
    nameInfo: {
      marginTop: 35,
      marginLeft: 265,
      width: 700,
    },
    divider: {
      width: "90%",
      borderWidth: 1,
      borderColor: "#E9ECEF",
      marginTop: 20,
    },
    thumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure,
    },
  });
  function handleButtonClick() {
    const presentismo = {
      fecha: new Date(),
      presente: true,
      usuarioId: 2,
      equipoId: 1,
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
        alert(
          "Presentismo del día " +
            new Date().toISOString().slice(0, 10) +
            " exitosamente cargado!"
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={require("../assets/imgs/bannerHandball.jpeg")}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: "15%" }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={require("../assets/icons/agos.jpg")}
                  style={styles.avatar}
                />
              </Block>
              <Block row space="between">
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    {currentUser?.usuario?.nombre}{" "}
                    {currentUser?.usuario?.apellido},{" "}
                    {currentUser?.usuario?.edad}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 14 }}>
                    {currentUser?.equipo?.nombre}, {currentUser?.equipo?.genero}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 14 }}>
                    {currentUser?.usuario?.direccion}
                  </Text>
                </Block>
              </Block>
              <Block style={styles.divider} />
              <Block center row>
                <Block
                  style={{
                    marginRight: 80,
                    width: 500,
                  }}
                >
                  <Block
                    middle
                    style={{ marginTop: 20, marginBottom: 16 }}
                  ></Block>
                  <Block middle>
                    <Button
                      style={{ width: 300 }}
                      textStyle={{
                        fontSize: 25,
                        fontWeight: "500",
                        color: "black",
                      }}
                      onPress={() => handleButtonClick()}
                    >
                      Presente
                    </Button>
                  </Block>
                </Block>
                <Block
                  style={{
                    marginTop: 20,
                    marginBottom: 16,
                    marginLeft: 0,
                    width: 400,
                    height: 300,
                  }}
                >
                  <ScrollView showsVerticalScrollIndicator={true}>
                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title
                          textStyle={{ fontSize: 20, fontWeight: "bold" }}
                        >
                          Entrenamiento
                        </DataTable.Title>
                        <DataTable.Title
                          style={{ width: 200 }}
                          textStyle={{ fontSize: 20, fontWeight: "bold" }}
                        >
                          Asignado
                        </DataTable.Title>
                      </DataTable.Header>

                      {entrenamientos.map((item, index) => {
                        return (
                          <DataTable.Row key={index}>
                            <DataTable.Cell textStyle={{ fontSize: 18 }}>
                              {item.titulo}
                            </DataTable.Cell>
                            <DataTable.Cell>
                              <Block
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor: jugadorRutinasMap.includes(
                                    index + 1
                                  )
                                    ? argonTheme.COLORS.INPUT_SUCCESS
                                    : argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                {jugadorRutinasMap.includes(index + 1) ? (
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
                          </DataTable.Row>
                        );
                      })}
                    </DataTable>
                  </ScrollView>
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
}
