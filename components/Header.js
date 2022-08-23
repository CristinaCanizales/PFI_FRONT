import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';

const Header = (props) => {
  const { height, width } = Dimensions.get("window");
  const iPhoneX = () =>
    Platform.OS === "ios" &&
    (height === 812 || width === 812 || height === 896 || width === 896);

  const styles = StyleSheet.create({
    button: {
      padding: 12,
      position: "relative",
    },
    title: {
      width: "100%",
      fontSize: 16,
      fontWeight: "bold",
    },
    navbar: {
      paddingVertical: 0,
      paddingBottom: theme.SIZES.BASE * 1.5,
      paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
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
    options: {
      marginBottom: 24,
      marginTop: 10,
      elevation: 4,
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
  });
  const {
    back,
    title,
    white,
    transparent,
    bgColor,
    iconColor,
    titleColor,
    navigation,
    search,
    options,
    optionLeft,
    optionRight,
    tabs,
    tabIndex,
    ...rest
  } = props;
  const handleLeftPress = () => {
    return back ? navigation.goBack() : navigation.openDrawer();
  };
  const renderRight = () => {
    return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Pro")}
      >
        <Icon
          family="ArgonExtra"
          size={16}
          name="bell"
          color={argonTheme.COLORS[white ? "WHITE" : "ICON"]}
        />
        <Block middle style={styles.notify} />
      </TouchableOpacity>
    );
  };
  const renderSearch = () => {
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="¿Qué buscas?"
        placeholderTextColor={"#8898AA"}
        onFocus={() => navigation.navigate("Pro")}
        iconContent={
          <Icon
            size={16}
            color={theme.COLORS.MUTED}
            name="search-zoom-in"
            family="ArgonExtra"
          />
        }
      />
    );
  };
  const renderOptions = () => {
    return (
      <Block row style={styles.options}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={() => navigation.navigate("Pro")}
        >
          <Block row middle>
            <Icon
              name="diamond"
              family="ArgonExtra"
              style={{ paddingRight: 8 }}
              color={argonTheme.COLORS.ICON}
            />
            <Text size={16} style={styles.tabTitle}>
              {optionLeft || "Mejor jugador"}
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };

  const noShadow = ["Search", "Categories", "Deals", "Pro", "Perfil"].includes(
    title
  );
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
        style={navbarStyles}
        transparent={transparent}
        right={renderRight()}
        rightStyle={{ alignItems: "center" }}
        left={
          <Icon
            name={back ? "chevron-left" : "menu"}
            family="entypo"
            size={20}
            onPress={handleLeftPress}
            color={
              iconColor ||
              (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)
            }
            style={{ marginTop: 2 }}
          />
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
          titleColor && { color: titleColor },
        ]}
        {...props}
      />
      {(search || options) && (
        <Block center>
          {search ? renderSearch() : null}
          {options ? renderOptions() : null}
        </Block>
      )}
    </Block>
  );
};

export default withNavigation(Header);
