import React, { useState } from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Video, AVPlaybackStatus } from "expo-av";

import { argonTheme } from "../constants";

function CardVideo(props) {
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
    video: {
      height: 200,
      width: 240,
      margin: 5,
    },
  });
  const video = React.useRef(null);
  const [status, setStatus] = useState(0);
  const { navigation, item, style } = props;

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
      </Block>
      <Block flex space="between" style={styles.cardDescription}>
        <Text size={14} style={styles.cardTitle}>
          {item.title}
        </Text>
      </Block>
    </Block>
  );
}

export default withNavigation(CardVideo);
