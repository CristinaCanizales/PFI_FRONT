import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
// import CalendarScreen from "../views/Calendar/CalendarScreen";
// import CreateNewsScreen from "../views/Novedades/CreateNewsScreen";
import HomeScreen from "../views/Home/HomeScreen";
// import LoginScreen from "../views/Login/LoginScreen";
// import NovedadesScreen from "../views/Novedades/NovedadesScreen";
// import ProfileScreen from "../views/Profile/ProfileScreen";
// import RegistroScreen from "../views/Login/RegistroScreen";
import DrawerContainer from "../views/DrawerContainer/DrawerContainer";
// import BackButton from "../components/BackButton/BackButton";
import MenuImage from "../components/MenuImage/MenuImage";
// import CreateButton from "../components/CreateButton/CreateButton";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Home",
          headerTintColor: "#47AFE3",
          headerLeft: () => (
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        };
      },
    },
    // Calendario: {
    //   screen: CalendarScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Calendario",
    //       headerTintColor: "#47AFE3",
    //       headerLeft: () => (
    //         <MenuImage
    //           onPress={() => {
    //             navigation.openDrawer();
    //           }}
    //         />
    //       ),
    //     };
    //   },
    // },
    // CrearNovedad: {
    //   screen: CreateNewsScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Crear Novedad",
    //       headerTintColor: "#47AFE3",
    //       headerLeft: () => (
    //         <BackButton
    //           onPress={() => {
    //             navigation.navigate("Novedades");
    //           }}
    //         />
    //       ),
    //     };
    //   },
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Inicio de sesión",
    //       headerTintColor: "#47AFE3",
    //     };
    //   },
    // },
    // Novedades: {
    //   screen: NovedadesScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Novedades",
    //       headerTintColor: "#47AFE3",
    //       headerLeft: () => (
    //         <MenuImage
    //           onPress={() => {
    //             navigation.openDrawer();
    //           }}
    //         />
    //       ),
    //       headerRight: () => (
    //         <CreateButton
    //           onPress={() => {
    //             navigation.navigate("CrearNovedad");
    //           }}
    //         />
    //       ),
    //     };
    //   },
    // },
    // Perfil: {
    //   screen: ProfileScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Perfil",
    //       headerTintColor: "#47AFE3",
    //       headerLeft: () => (
    //         <MenuImage
    //           onPress={() => {
    //             navigation.openDrawer();
    //           }}
    //         />
    //       ),
    //     };
    //   },
    // },
    // Registro: {
    //   screen: RegistroScreen,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Registro",
    //       headerTintColor: "#47AFE3",
    //     };
    //   },
    // },
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        paddingTop: 10,
        flex: 1,
      },
    }),
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);
