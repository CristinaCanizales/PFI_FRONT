import React from "react";
import { StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";

import argonTheme from "../constants/Theme";

export default function DrawerItem(props) {
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
      height: 25,
      width: 25,
    },
  });

  const renderIcon = () => {
    const { title, focused } = props;

    switch (title) {
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

  return (
    <TouchableOpacity
      style={{ height: 60 }}
      onPress={() =>
        title == "Getting Started"
          ? Linking.openURL(
              "https://demos.creative-tim.com/argon-pro-react-native/docs/"
            ).catch((err) => console.error("An error occurred", err))
          : navigation.navigate(title)
      }
    >
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}
