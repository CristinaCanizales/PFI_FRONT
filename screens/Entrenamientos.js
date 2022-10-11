import React, { useState, useContext } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import CardVideo from "../components/CardVideo.js";
import { DataContext } from "../context";
const { width } = Dimensions.get("screen");

export default function Entrenamientos(props) {
  const { entrenamientos } = useContext(DataContext);
  const { navigation } = props;
  const styles = StyleSheet.create({
    home: {
      width: width,
    },
    articles: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE,
    },
  });
  return (
    <Block flex center style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block
          row
          space="between"
          style={{
            marginRight: theme.SIZES.BASE,
            marginTop: theme.SIZES.BASE,
            flexWrap: "wrap",
          }}
        >
          {entrenamientos.map((item, index) => {
            return (
              <Block key={index} style={{ borderRadius: 50 }}>
                <CardVideo
                  youtube={true}
                  item={item}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
}
