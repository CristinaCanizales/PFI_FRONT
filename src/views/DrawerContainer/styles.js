import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headers:{
    alignItems: 'center',
    marginTop: -150
  },
  headerParent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  headerChild: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },
  container: {
    flex: 0.5,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 200,
    marginLeft: 10
  },
  imageParent: {
    flex: 0.2,
    height: 48,
    left: 25,
    borderRadius: 100,
    marginRight: 10
  },
  nameParent:{
    flex: 0.8,
    alignItems: 'center'
  },
  imageChild: {
    flex: 0.2,
    height: 48,
    left: 25,
    borderRadius: 100,
    marginRight: 10
  },
  nameChild:{
    flex: 0.6,
    alignItems: 'center',
    textAlign: 'right'
  },
  grade:{
    flex: 0.2,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  confirmationModal: { 
    borderRadius: 15, 
    height: 200, 
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300, 
    backgroundColor: 'white',
    marginLeft: 180,
  },
  modalTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#18A0E2'
  },
  modalButton: {
    textAlign: 'center',
    alignSelf: 'center',
    width: 100,
    margin: 30
  },
  modalImage:{
    height: 60,
    width: 60,
    left: 25,
    top: 10,
    borderRadius: 100,
    marginHorizontal: 10
  },
  modalItems:{
    alignItems: 'center',
    flexDirection: 'row'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
});

export default styles;
