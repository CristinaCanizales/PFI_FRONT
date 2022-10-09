import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";
const { width } = Dimensions.get("screen");
import YoutubePlayer from "react-native-youtube-iframe";

export default function DetalleEntrenamiento({ route }) {
  // console.log("route", route.params.video);

  const [item, setItem] = useState(route.params.item);
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState(item.video);

  useEffect(() => {
    console.log("new video");
  }, [item.video]);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
    if (state === "playing") {
      setPlaying(true);
    }
    if (state === "paused") {
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
      {console.log("route", route.params.item)}
      <Block flex center>
        {console.log("video detalle", route.params.item.video)}
        <YoutubePlayer
          cacheEnabled={false}
          webViewStyle={styles.video}
          play={playing}
          videoId={`${route.params.item.video}`}
          onChangeState={onStateChange}
        />
      </Block>
      <Block flex center style={styles.cardDescription}>
        <Text h1 style={styles.cardTitle}>
          {route.params.item.title}
        </Text>
        <Text h4 style={styles.cardTitle}>
          {route.params.item.detalle}
        </Text>
      </Block>
    </ScrollView>
  );
}
