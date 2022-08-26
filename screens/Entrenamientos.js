import React, { useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import CardVideo from "../components/CardVideo.js";
import videos from "../constants/videos";
const { width } = Dimensions.get("screen");

export default function Home(props) {
  const [status, setStatus] = useState(0);
  const video = React.useRef(null);
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
          {videos.map((item, index) => {
            return (
              <Block key={index} style={{ borderRadius: 50 }}>
                <CardVideo
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
