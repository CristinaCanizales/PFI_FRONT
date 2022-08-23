import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Grabaciones from "../screens/Grabaciones";
import Register from "../screens/Register";
import CargaDeDatos from "../screens/CargaDeDatos";
import Entrenamientos from "../screens/Entrenamientos";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Dashboard from "../screens/Dashboard";
// screens
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Dashboard" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Grabaciones"
        component={Grabaciones}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Grabaciones"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Perfil"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function PresentismoStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CargaDeDatos"
        component={CargaDeDatos}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="CargaDeDatos"
              navigation={navigation}
              scene={scene}
              showTime
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function EntrenamientosStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Entrenamientos"
        component={Entrenamientos}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Entrenamientos"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={ElementsStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Grabaciones"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="CargaDeDatos"
        component={PresentismoStack}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Entrenamientos"
        component={EntrenamientosStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function InitialStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}