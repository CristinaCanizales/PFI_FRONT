import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { DataContext } from "../../context";

export default function CreateButton(props) {
  const { currentUser } = useContext(DataContext);
  return (
    currentUser.rolId === 2 && (
      <TouchableOpacity
        style={styles.headerButtonContainer}
        onPress={props.onPress}
      >
        <Image
          style={styles.headerButtonImage}
          source={require("../../../assets/icons/plus.png")}
        />
      </TouchableOpacity>
    )
  );
}

CreateButton.propTypes = {
  onPress: PropTypes.func,
};
