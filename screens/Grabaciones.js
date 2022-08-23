import React from "react";
// import { Video, AVPlaybackStatus } from "expo-av";
//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme } from "../constants";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125",
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35",
  },
];

export default function Grabaciones(props) {
  const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER,
    },
    backgroundVideo: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    group: {
      paddingTop: theme.SIZES.BASE,
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: "center",
      width: thumbMeasure,
      height: thumbMeasure,
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0,
    },
    categoryTitle: {
      height: "100%",
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    imageBlock: {
      overflow: "hidden",
      borderRadius: 4,
    },
    productItem: {
      width: cardWidth - theme.SIZES.BASE * 2,
      marginHorizontal: theme.SIZES.BASE,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 7 },
      shadowRadius: 10,
      shadowOpacity: 0.2,
    },
    productImage: {
      width: cardWidth - theme.SIZES.BASE,
      height: cardWidth - theme.SIZES.BASE,
      borderRadius: 3,
    },
    productPrice: {
      paddingTop: theme.SIZES.BASE,
      paddingBottom: theme.SIZES.BASE / 2,
    },
    productDescription: {
      paddingTop: theme.SIZES.BASE,
      // paddingBottom: theme.SIZES.BASE * 2,
    },
  });

  const renderAlbum = () => {
    const { navigation } = props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Block>
          {/* <Video
            ref={React.useRef(null)}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          /> */}
        </Block>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block flex center>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Video
          source={{ uri: "https://youtu.be/qcQ_2qIVCIg" }} // Can be a URL or a local file.
          // ref={(ref) => {
          //   this.player = ref;
          // }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        /> */}

        {renderAlbum()}
      </ScrollView>
    </Block>
  );
}
