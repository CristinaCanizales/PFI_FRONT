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
      marginBottom: 15,
    },
    video: {
      height: 500,
      width: 600,
    },
    divider: {
      width: "90%",
      borderWidth: 2,
      borderColor: "#E9ECEF",
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex center style={styles.cardDescription}>
        <Text h4 style={styles.cardTitle}>
          Resultados resistencia
        </Text>
        <Block style={styles.divider} />
        <Text h4 style={styles.cardTitle}>
          Resultados salto en alto
        </Text>
        <Block style={styles.divider} />
        <Text h4 style={styles.cardTitle}>
          Resultados salto en largo
        </Text>
        <Block style={styles.divider} />
        <Text h4 style={styles.cardTitle}>
          Resultados velocidad
        </Text>
      </Block>
    </ScrollView>
  );
}
