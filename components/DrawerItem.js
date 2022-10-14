import React, { useState, useContext } from "react";
import { StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";

import argonTheme from "../constants/Theme";
import { DataContext } from "../context";

export default function DrawerItem(props) {
  const { currentUser, setCurrentUser } = useContext(DataContext);
  const styles = StyleSheet.create({
    defaultStyle: {
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    activeStyle: {
      backgroundColor: argonTheme.COLORS.ACTIVE,
      borderRadius: 4,
    },
    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
    },
    btnIcon: {
      height: 45,
      width: 45,
    },
  });

  const renderIcon = () => {
    const { title, focused } = props;

    switch (title) {
      case "Admin":
        return (
          <Image
            source={require("../assets/icons/admin.png")}
            style={styles.btnIcon}
          />
        );
      case "Home":
        return (
          <Image
            source={require("../assets/icons/home2.png")}
            style={styles.btnIcon}
          />
        );
      case "Dashboard":
        return (
          <Image
            source={require("../assets/icons/dashboard.png")}
            style={styles.btnIcon}
          />
        );
      case "Grabaciones":
        return (
          <Image
            source={require("../assets/icons/yoga.png")}
            style={styles.btnIcon}
          />
        );
      case "Login":
        return (
          <Image
            source={require("../assets/icons/enter.png")}
            style={styles.btnIcon}
          />
        );
      case "Perfil":
        return (
          <Image
            source={require("../assets/icons/runner.png")}
            style={styles.btnIcon}
          />
        );
      case "Registro":
        return (
          <Image
            source={require("../assets/icons/register.png")}
            style={styles.btnIcon}
          />
        );
      case "Carga de Datos":
        return (
          <Image
            source={require("../assets/icons/upload2.png")}
            style={styles.btnIcon}
          />
        );
      case "Presentismo":
        return (
          <Image
            source={require("../assets/icons/attendance.png")}
            style={styles.btnIcon}
          />
        );

      case "Tests físicos":
        return (
          <Image
            source={require("../assets/icons/dumbbell.png")}
            style={styles.btnIcon}
          />
        );
      case "Entrenamientos":
        return (
          <Image
            source={require("../assets/icons/workout.png")}
            style={styles.btnIcon}
          />
        );
      case "Log out":
        return (
          <Image
            source={require("../assets/icons/logout.png")}
            style={styles.btnIcon}
          />
        );
      default:
        return null;
    }
  };

  const { focused, title, navigation } = props;

  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];
  function logOut() {
    setCurrentUser({});
    navigation.navigate("Login");
  }

  return (
    <TouchableOpacity
      style={{ height: 60 }}
      onPress={() => {
        title == "Log out" ? logOut() : navigation.navigate(title);
      }}
    >
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={22}
            bold={focused ? true : false}
            color={focused ? "white" : "#4F398D"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}
