import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

export default function Home(props) {
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
          {articles.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate(item.title)}
              >
                <Block>
                  <Card item={item} style={{ marginRight: theme.SIZES.BASE }} />
                </Block>
              </TouchableWithoutFeedback>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
}