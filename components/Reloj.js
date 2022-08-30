import React, { useEffect, useState } from "react";
//galio
import { Block, Text, theme } from "galio-framework";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export default function Reloj(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const styles = StyleSheet.create({
    group: {
      paddingTop: theme.SIZES.BASE,
    },
    boxReloj: {
      marginLeft: 1000,
      paddingTop: 20,
      paddingLeft: 45,
      width: 200,
      height: 75,
      backgroundColor: "skyblue",
      alignSelf: "flex-end",
      borderRadius: 70,
    },
  });
  useEffect(() => {
    let timeout = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => window.clearInterval(timeout);
  }, []);

  return (
    <Block
      row
      space="between"
      style={[styles.group, { paddingRight: 50, paddingBottom: 30 }]}
    >
      <Text bold size={30} style={styles.boxReloj}>
        {time}
      </Text>
    </Block>
  );
}
