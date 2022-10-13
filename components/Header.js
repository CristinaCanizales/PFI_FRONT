import React, { useContext } from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { Button, Block, NavBar, Text, theme } from "galio-framework";

import Input from "./Input";
import argonTheme from "../constants/Theme";
import { DataContext } from "../context";

const Header = (props) => {
  const { refresh, setRefresh } = useContext(DataContext);
  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    button: {
      padding: 12,
      position: "relative",
    },
    title: {
      width: "100%",
      fontSize: 25,
      fontWeight: "bold",
    },
    navbar: {
      paddingVertical: 0,
      paddingBottom: theme.SIZES.BASE * 1.5,
      paddingTop: 35,
      zIndex: 5,
    },
    shadow: {
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.2,
      elevation: 3,
    },
    notify: {
      backgroundColor: argonTheme.COLORS.LABEL,
      borderRadius: 4,
      height: theme.SIZES.BASE / 2,
      width: theme.SIZES.BASE / 2,
      position: "absolute",
      top: 9,
      right: 12,
    },
    header: {
      backgroundColor: theme.COLORS.WHITE,
    },
    divider: {
      borderRightWidth: 0.3,
      borderRightColor: theme.COLORS.ICON,
    },
    search: {
      height: 48,
      width: width - 32,
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: argonTheme.COLORS.BORDER,
    },
    tab: {
      backgroundColor: theme.COLORS.TRANSPARENT,
      width: width * 0.35,
      borderRadius: 0,
      borderWidth: 0,
      height: 24,
      elevation: 0,
    },
    tabTitle: {
      lineHeight: 19,
      fontWeight: "400",
      color: argonTheme.COLORS.HEADER,
    },
    btnIcon: {
      height: 30,
      width: 30,
    },
  });
  const {
    back,
    title,
    white,
    reload,
    transparent,
    bgColor,
    iconColor,
    titleColor,
    navigation,
    optionLeft,
    optionRight,
    tabs,
    tabIndex,
    ...rest
  } = props;
  const handleLeftPress = () => {
    return back ? navigation.goBack() : navigation.openDrawer();
  };
  const renderSearch = () => {
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="¿Qué buscas?"
        placeholderTextColor={"#8898AA"}
        onFocus={() => navigation.navigate("Home")}
        iconContent={
          <Image
            source={require("../assets/icons/search.png")}
            style={styles.btnIcon}
          />
        }
      />
    );
  };
  const renderRight = () => {
    return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => setRefresh(refresh + 1)}
      >
        <Image
          source={require("../assets/icons/refresh.png")}
          style={styles.btnIcon}
        />
      </TouchableOpacity>
    );
  };
  const noShadow = ["Search", "Categories", "Deals", "Perfil"].includes(title);
  const headerStyles = [
    !noShadow ? styles.shadow : null,
    transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
  ];

  const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        right={reload ? renderRight() : <></>}
        style={navbarStyles}
        transparent={transparent}
        rightStyle={{ alignItems: "center" }}
        left={
          <Pressable onPress={handleLeftPress}>
            <Image
              source={
                back
                  ? require("../assets/icons/double-chevron.png")
                  : require("../assets/icons/menu.png")
              }
              style={{ height: 30, width: 30, marginTop: 2 }}
            />
          </Pressable>
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
          titleColor && { color: titleColor },
        ]}
        {...props}
      />
    </Block>
  );
};

export default withNavigation(Header);
