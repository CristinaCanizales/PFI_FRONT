import React, { useState, useContext } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
import { DataContext } from "../context";

const { width } = Dimensions.get("screen");

export default function Home(props) {
  const { currentUser } = useContext(DataContext);
  const { navigation } = props;
  const styles = StyleSheet.create({
    home: {
      width: width,
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE,
      marginLeft: 30,
    },
    articles: {},
  });
  return (
    <Block flex center style={styles.home}>
      <Block
        row
        space="between"
        style={{
          marginRight: theme.SIZES.BASE,
          flexWrap: "wrap",
        }}
      >
        {articles.map((item, index) => {
          return currentUser?.usuario?.rolId !== 2 &&
            (item.title === "Admin" ||
              item.title === "Carga de Datos" ||
              item.title === "Presentismo") ? (
            <Block key={index}></Block>
          ) : (
            <TouchableWithoutFeedback
              style={{
                height: 340,
              }}
              key={index}
              onPress={() => navigation.navigate(item.title)}
            >
              <Block
                style={{
                  height: 340,
                }}
              >
                <Card item={item} style={{ marginRight: theme.SIZES.BASE }} />
              </Block>
            </TouchableWithoutFeedback>
          );
        })}
      </Block>
    </Block>
  );
}
