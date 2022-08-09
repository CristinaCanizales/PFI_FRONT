import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: 'white'
  },
  title: {
    color: '#47AFE3',
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    textAlign: 'center',
    margin: 20
  },
  titleRegisterScreen: {
    color: '#47AFE3',
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    textAlign: 'center',
  },
  errorMail: {
    color: 'red',
    fontSize: 15,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 0,
    padding: 10
  },
  buttonLogin: {
    backgroundColor: '#18A0E2',
    borderRadius: 0,
    textAlign: 'center',
    width: 150,
    alignSelf: 'center',    
    margin: 10,
    marginTop: 10
  },
  buttonRegisterScreen: {
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  input: {
      borderRadius: 20,
      backgroundColor: '#D8F2FF',
      width: 220,
      height: 35,
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center',
  },
  inputRegisterScreen: {
    borderRadius: 20,
    backgroundColor: '#D8F2FF',
    width: 220,
    height: 25,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10
  },
  confirmationModal: { 
    borderRadius: 15, 
    height: 250, 
    alignSelf: 'center', 
    width: 400, 
    backgroundColor: 'white', 
    margin: -100 
  },
  modalTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },
  modalButton: {
    color: '#4BA9FF',
    textAlign: 'center',
    alignSelf: 'center',
    width: 100,
    margin: 10
  },
  registerInput: {
    padding: 10
  }
});

export default styles;
