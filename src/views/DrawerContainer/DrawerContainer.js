import React, { useContext, useState } from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { DataContext } from "../../context";

export default function DrawerContainer(props) {
  const {
    currentUser,
    currentChild,
    setCurrentChild,
    setCurrentUser,
    students,
  } = useContext(DataContext);
  const [visibilityModal, setVisibilityModal] = useState(false);
  const closeModal = () => {
    setVisibilityModal(false);
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Home"
          // source={require("../../../assets/icons/home.png")}
          onPress={() => {
            props.navigation.navigate("Home");
            props.navigation.closeDrawer();
          }}
        />
        {/* <MenuButton
          title="Perfil"
          source={require("../../../assets/icons/user.png")}
          onPress={() => {
            props.navigation.navigate("Perfil");
            props.navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Calendario"
          source={require("../../../assets/icons/calendar.png")}
          onPress={() => {
            props.navigation.navigate("Calendario");
            props.navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Novedades"
          source={require("../../../assets/icons/posts.png")}
          onPress={() => {
            props.navigation.navigate("Novedades");
            props.navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Cerrar sesión"
          source={require("../../../assets/icons/user.png")}
          onPress={() => {
            setCurrentChild("");
            setCurrentUser("");
            props.navigation.navigate("Login");
            props.navigation.closeDrawer();
          }}
        /> */}
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
