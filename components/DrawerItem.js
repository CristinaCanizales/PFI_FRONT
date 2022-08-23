import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
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
  });

  const renderIcon = () => {
    const { title, focused } = props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Dashboard":
        return (
          <Icon
            name="map-big"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.ERROR}
          />
        );
      case "Grabaciones":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Perfil":
        return (
          <Icon
            name="chart-pie-35"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
      case "Account":
        return (
          <Icon
            name="calendar-date"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "CargaDeDatos":
        return (
          <Icon
            name="check-bold"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Entrenamientos":
        return (
          <Icon
            name="user-run"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Dashboard":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          />
        );
      case "Log out":
        return <Icon />;
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
