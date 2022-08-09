import React from "react";
import { TouchableHighlight, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props) {
  return (
    <TouchableHighlight
      underlayColor="#dfeef5"
      onPress={props.onPress}
      style={styles.btnContainer}
    >
      <Image
        source={require("../../../assets/icons/previous.png")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
