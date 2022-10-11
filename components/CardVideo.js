import React, { useState, useCallback } from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Video, AVPlaybackStatus } from "expo-av";
import YoutubePlayer from "react-native-youtube-iframe";

function CardVideo(props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE,
      borderWidth: 2,
      minHeight: 100,
      marginBottom: 16,
      borderRadius: 15,
    },
    cardTitle: {
      flex: 1,
      flexWrap: "wrap",
      paddingBottom: 6,
    },
    cardDescription: {
      padding: theme.SIZES.BASE / 2,
    },
    divider: {
      width: 500,
      borderWidth: 1,
      borderColor: "#E9ECEF",
    },
    video: {
      height: 310,
      width: 550,
      margin: 5,
    },
  });
  const video = React.useRef(null);
  const [status, setStatus] = useState(0);
  const { navigation, item, style, youtube } = props;

  const cardContainer = [styles.card, style];

  return (
    <Block card flex style={cardContainer}>
      <Block
        flex
        style={{
          borderWidth: 0.5,
          borderColor: "gray",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        {youtube ? (
          <YoutubePlayer
            fullscreen={true}
            webViewStyle={styles.video}
            play={playing}
            videoId={item.video}
            onChangeState={onStateChange}
          />
        ) : (
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: item.video,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
      </Block>
      <Block flex space="between" style={styles.cardDescription}>
        <Text center h4 style={styles.cardTitle}>
          {item.titulo}
        </Text>
        {youtube && (
          <>
            <Block style={styles.divider} />
            <Text size={20} style={styles.cardTitle}>
              {item.categoria}: {item.detalleRutina}
            </Text>
          </>
        )}
      </Block>
    </Block>
  );
}

export default withNavigation(CardVideo);
