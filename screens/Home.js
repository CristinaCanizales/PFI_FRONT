import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

export default function Home(props) {
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
          <Block>
            <Card
              item={articles[0]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
          <Block>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
          <Block>
            <Card
              item={articles[2]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
          <Block>
            <Card
              item={articles[3]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
          <Block>
            <Card
              item={articles[4]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}