//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme, articles } from "../constants";

import { Card } from "../components";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

export default function Entrenamientos(props) {
  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER,
    },
    group: {
      paddingTop: theme.SIZES.BASE,
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0,
    },
    categoryTitle: {
      height: "100%",
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    imageBlock: {
      overflow: "hidden",
      borderRadius: 4,
    },
    productItem: {
      width: cardWidth - theme.SIZES.BASE * 2,
      marginHorizontal: theme.SIZES.BASE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 7 },
      shadowRadius: 10,
      shadowOpacity: 0.2,
    },
    productImage: {
      width: cardWidth - theme.SIZES.BASE,
      height: cardWidth - theme.SIZES.BASE,
      borderRadius: 3,
    },
    productPrice: {
      paddingTop: theme.SIZES.BASE,
      paddingBottom: theme.SIZES.BASE / 2,
    },
    productDescription: {
      paddingTop: theme.SIZES.BASE,
      // paddingBottom: theme.SIZES.BASE * 2,
    },
  });

  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex style={styles.group}>
          <Block
            style={{
              paddingHorizontal: theme.SIZES.BASE,
            }}
          >
            <Block
              row
              space="evenly"
              style={{
                marginTop: theme.SIZES.BASE,
                flexWrap: "wrap",
              }}
            >
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[2]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[4]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[6]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
            </Block>
            <Block
              row
              space="evenly"
              style={{
                marginTop: theme.SIZES.BASE,
                flexWrap: "wrap",
              }}
            >
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[2]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[4]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[6]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
            </Block>
            <Block
              row
              space="evenly"
              style={{
                marginTop: theme.SIZES.BASE,
                flexWrap: "wrap",
              }}
            >
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[2]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[4]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[1]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
              <Block center>
                <Card
                  item={articles[6]}
                  style={{ marginRight: theme.SIZES.BASE }}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

