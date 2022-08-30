import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Block, theme } from "galio-framework";

import CardVideo from "../components/CardVideo.js";
import videos from "../constants/videos";
const { width } = Dimensions.get("screen");

export default function Entrenamientos(props) {
  const { navigation } = props;
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
              <TouchableOpacity
                key={index}
                style={[styles.button]}
                onPress={() =>
                  navigation.navigate("Detalle del entrenamiento", {
                    screen: "Detalle del entrenamiento",
                    params: { item: item },
                  })
                }
              >
                <Block style={{ borderRadius: 50 }}>
                  <CardVideo
                    item={item}
                    style={{ marginRight: theme.SIZES.BASE }}
                  />
                </Block>
              </TouchableOpacity>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
}
