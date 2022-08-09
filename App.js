import React from "react";
// import AppContainer from "./src/navigations/AppNavigation";
// import { ContextProvider } from "./src/context/providerCompose";
// import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Header } from "galio-framework";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to My Team Stats!</Text>
      <BottomNavigation
        showLabels={true}
        // value={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <Header
        search
        options
        title="Title"
        optionLeft="Option 1"
        optionRight="Option 2"
        // navigation={this.props.navigation}
      />
      <StatusBar style="auto" />
    </View>
  );
}

// export default function App() {
//   return (
//     <ContextProvider>
//       <AppContainer />
//       <Toast ref={(ref) => Toast.setRef(ref)} />
//     </ContextProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
