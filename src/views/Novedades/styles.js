import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  title: {
    color: "#47AFE3",
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: "solid",
    paddingLeft: 10,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    width: 250,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  input: {
    borderRadius: 20,
    backgroundColor: "#D8F2FF",
    width: 220,
    height: 25,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 15,
  },
  modalSelector: {
    justifyContent: "space-around",
    padding: 5,
    alignSelf: "center",
    width: 240,
    height: 45,
    backgroundColor: "#8dbfe3",
    borderRadius: 5,
    borderColor: "blue",
  },
});

export default styles;
