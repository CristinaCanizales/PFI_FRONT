import React from "react";
// import AppContainer from "./src/navigation/AppNavigation";
// import { ContextProvider } from "./src/context/providerCompose";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/views/Home/HomeScreen.js";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Header from "./src/components/Header/Header";

export default function App() {
  return (
    // <ContextProvider>
    //   <AppContainer />
    //   <Toast ref={(ref) => Toast.setRef(ref)} />
    // </ContextProvider>
    <View style={styles.container}>
      <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
        <Header
          style={{ paddingTop: 30,
            backgroundColor: "#a2d6fa", }}
          search={true}
          title="Welcome to My Team Stats!"
          // navigation={this.props.navigation}
        />
      </Paper>
      <StatusBar style="auto">hola</StatusBar>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          style={{
            backgroundColor: "#a2d6fa",
          }}
          showLabels={true}
          // value={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Presentismo" icon={<HowToRegIcon />} />
          <BottomNavigationAction
            label="Entrenamientos"
            icon={<OndemandVideoIcon />}
          />
          <BottomNavigationAction label="Perfil" icon={<AccountBoxIcon />} />
          <BottomNavigationAction
            label="Rutinas"
            icon={<FitnessCenterIcon />}
          />
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
        </BottomNavigation>
      </Paper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
