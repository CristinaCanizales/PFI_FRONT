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
      borderWidth: 0,
      minHeight: 114,
      marginBottom: 16,
    },
    cardTitle: {
      flex: 1,
      flexWrap: "wrap",
      paddingBottom: 6,
    },
    cardDescription: {
      padding: theme.SIZES.BASE / 2,
    },
    imageContainer: {
      borderRadius: 3,
      elevation: 1,
      overflow: "hidden",
    },
    image: {
      // borderRadius: 3,
    },
    horizontalImage: {
      height: 122,
      width: "auto",
    },
    horizontalStyles: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    verticalStyles: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    fullImage: {
      height: 215,
    },
    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 2,
    },
    video: {
      height: 250,
      width: 250,
    },
  });
  const video = React.useRef(null);
  const [status, setStatus] = useState(0);
  const { navigation, item, horizontal, full, style, ctaColor, imageStyle } =
    props;

  const imageStyles = [
    full ? styles.fullImage : styles.horizontalImage,
    imageStyle,
  ];
  const cardContainer = [styles.card, styles.shadow, style];
  const imgContainer = [
    styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    styles.shadow,
  ];

  return (
    <Block row={horizontal} card flex style={cardContainer}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
        <Block flex style={imgContainer}>
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
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
        <Block flex space="between" style={styles.cardDescription}>
          <Text size={14} style={styles.cardTitle}>
            {item.title}
          </Text>
          <Text
            size={12}
            muted={!ctaColor}
            color={ctaColor || argonTheme.COLORS.ACTIVE}
            bold
          >
            {item.cta}
          </Text>
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
}

export default withNavigation(CardVideo);
