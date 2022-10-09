import React from "react";
import { Dimensions } from "react-native";
// header for screens
import { Header } from "../components";
// drawer
import CustomDrawerContent from "./Menu";
// screens
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Dashboard from "../screens/Dashboard";
import Grabaciones from "../screens/Grabaciones";
import Register from "../screens/Register";
import CargaDeDatos from "../screens/CargaDeDatos";
import DetalleEntrenamiento from "../screens/DetalleEntrenamiento";
import Presentismo from "../screens/Presentismo";
import TestsFisicos from "../screens/TestsFisicos";
import Entrenamientos from "../screens/Entrenamientos";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DashboardStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Dashboard"
              back
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

function GrabacionesStack(props) {
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
              back
              title="Grabaciones"
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
            <Header back title="Perfil" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function CargaDeDatosStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Carga de Datos"
        component={CargaDeDatos}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Carga de Datos"
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
              back
              title="Entrenamientos"
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

function DetalleEntrenamientoStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Detalle del entrenamiento"
        component={DetalleEntrenamiento}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Detalle del entrenamiento"
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

function PresentismoStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Presentismo"
        component={Presentismo}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title={"Presentismo día: " + new Date().toLocaleDateString()}
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

function TestsFisicosStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Tests físicos"
        component={TestsFisicos}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Tests físicos"
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
              options
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

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.4,
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
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Registro"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Grabaciones"
        component={GrabacionesStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Carga de Datos"
        component={CargaDeDatosStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Entrenamientos"
        component={EntrenamientosStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Detalle del entrenamiento"
        component={DetalleEntrenamientoStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Presentismo"
        component={PresentismoStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Tests físicos"
        component={TestsFisicosStack}
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
