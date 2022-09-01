import { StyleSheet, Dimensions } from "react-native";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  modalSelector: {
    justifyContent: "space-around",
    padding: 5,
    alignSelf: "center",
    width: 300,
    height: 50,
    backgroundColor: "skyblue",
    borderRadius: 5,
    borderColor: "blue",
  },
  btnimage: {
    borderRadius: 10,
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  buttonLogin: {
    borderRadius: 20,
    textAlign: "center",
    width: 180,
    alignSelf: "center",
    margin: 10,
  },
});

export default styles;
