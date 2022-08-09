import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Header from "../../components/Header/Header";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Paper
        sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Header
          search={true}
          title="Welcome to My Team Stats!"
          // navigation={this.props.navigation}
        />
      </Paper>
      <StatusBar style="auto">ho;\la</StatusBar>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
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
