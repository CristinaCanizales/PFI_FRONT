import React, { useContext } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { DataContext } from "../context";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default function Perfil(props) {
  const { jugadores, url } = useContext(DataContext);
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
    },
    thumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure,
    },
  });

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
              <Block style={styles.info}>
                <Block row space="between" style={{ marginTop: 10 }}>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      15
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Goles 7m
                    </Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      18
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Goles 6m
                    </Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      50
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Atajadas
                    </Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      21
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Erradas
                    </Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      10
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Robadas
                    </Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      7
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.TEXT}>
                      Paradas
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block row space="between">
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    {jugadores[0].usuario.nombre}{" "}
                    {jugadores[0].usuario.apellido}, {jugadores[0].usuario.edad}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    {jugadores[0].equipo.nombre}, {jugadores[0].equipo.genero}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    {jugadores[0].usuario.direccion}
                  </Text>
                </Block>
                <Block style={{ marginLeft: 10 }}>
                  <Button
                    small
                    style={{
                      backgroundColor: argonTheme.COLORS.INFO,
                      marginTop: 40,
                    }}
                  >
                    Editar perfil
                  </Button>
                </Block>
              </Block>
              <Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Block key="qr" style={styles.shadow}>
                    <Image
                      resizeMode="cover"
                      source={require("../assets/imgs/qr.jpeg")}
                      style={{ height: 300, width: 300 }}
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
}
