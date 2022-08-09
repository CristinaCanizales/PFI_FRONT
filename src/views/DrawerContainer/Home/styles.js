import { StyleSheet, Dimensions } from 'react-native';
import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";


// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 70
  },
  title: {
    flex: 1,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#47AFE3',
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  body: {
    flex: 1,
    fontSize: 17,
    textAlign: 'left',
    justifyContent: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    padding: 20,
  },
});

export default styles;
