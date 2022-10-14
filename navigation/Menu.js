import React, { useState, useContext } from "react";
import { Block, Text, theme } from "galio-framework";
import { Image, ScrollView, StyleSheet } from "react-native";

import { DrawerItem as DrawerCustomItem } from "../components";
import { argonTheme } from "../constants";
import { DataContext } from "../context";

export default function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 28,
      paddingBottom: theme.SIZES.BASE,
      paddingTop: theme.SIZES.BASE * 3,
      justifyContent: "center",
    },
    btnIcon: {
      height: 80,
      width: 80,
      marginLeft: 30,
    },
  });
  const { currentUser } = useContext(DataContext);

  const screens = [
    "Home",
    "Perfil",
    "Registro",
    "Dashboard",
    "Grabaciones",
    "Carga de Datos",
    "Presentismo",
    "Tests físicos",
    "Entrenamientos",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block row space="between" flex={0.1} style={styles.header}>
        <Text
          h1
          style={{ marginBottom: theme.SIZES.BASE / 2 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          My Team Stats
        </Text>
        <Image
          source={require("../assets/icons/stats.png")}
          style={styles.btnIcon}
        />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return currentUser?.usuario?.rolId !== 2 &&
              (item === "Admin" ||
                item === "Carga de Datos" ||
                item === "Presentismo") ? (
              <Block key={index}></Block>
            ) : (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "rgba(0,0,0,0.2)",
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            {/* <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>
              Ayuda
            </Text> */}
          </Block>
          {!currentUser && (
            <DrawerCustomItem title="Login" navigation={navigation} />
          )}
          {currentUser && (
            <DrawerCustomItem title="Log out" navigation={navigation} />
          )}
          {currentUser && currentUser?.usuario?.rolId === 2 && (
            <>
              <DrawerCustomItem title="Log out" navigation={navigation} />
              <DrawerCustomItem title="Admin" navigation={navigation} />
            </>
          )}
        </ScrollView>
      </Block>
    </Block>
  );
}
