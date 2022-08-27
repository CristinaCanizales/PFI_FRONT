import React, { useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Video, AVPlaybackStatus } from "expo-av";

import CardVideo from "../components/CardVideo.js";
import videos from "../constants/videos";
const { width } = Dimensions.get("screen");
import { argonTheme } from "../constants";

export default function TestsFisicos({ route }) {
  // const { item } = route.params;
  const item = videos[0];
  const [status, setStatus] = useState(0);
  const video = React.useRef(null);
  const styles = StyleSheet.create({
    home: {
      width: width,
    },
    card: {
      backgroundColor: theme.COLORS.WHITE,
      borderWidth: 0,
      minHeight: 114,
    },
    cardTitle: {
      flex: 1,
      flexWrap: "wrap",
    },
    video: {
      height: 500,
      width: 600,
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex center style={styles.cardDescription}>
        <Text h1 style={styles.cardTitle}>
          {item.title}
        </Text>
        <Text h4 style={styles.cardTitle}>
          Triceps con polea
        </Text>
      </Block>
    </ScrollView>
  );
}
