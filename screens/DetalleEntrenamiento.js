import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";
const { width } = Dimensions.get("screen");
import YoutubePlayer from "react-native-youtube-iframe";

export default function DetalleEntrenamiento({ route }) {
  const { item } = route.params;
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState(item.video);

  useEffect(() => {
    console.log("new video");
  }, [item.video]);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  const styles = StyleSheet.create({
    cardTitle: {
      flex: 1,
      flexWrap: "wrap",
    },
    video: {
      marginTop: 20,
      height: 500,
      width: 800,
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex center>
        <YoutubePlayer
          webViewStyle={styles.video}
          play={playing}
          videoId={video}
          onChangeState={onStateChange}
        />
      </Block>
      <Block flex center style={styles.cardDescription}>
        <Text h1 style={styles.cardTitle}>
          {item.title}
        </Text>
        <Text h4 style={styles.cardTitle}>
          {item.detalle}
        </Text>
      </Block>
    </ScrollView>
  );
}
