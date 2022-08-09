import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { DataContext } from "../../context";
import Modal from "react-native-simple-modal";
import Toast from 'react-native-toast-message';

export default function LoginScreen (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [visibilityModal1, setVisibilityModal1] = useState(false);
  const [visibilityModal2, setVisibilityModal2] = useState(false);
  const [visibilityModal3, setVisibilityModal3] = useState(false);
  const [visibilityModal4, setVisibilityModal4] = useState(false);
  const [ usuario, setUsuario ] = useState(null);
  const { currentUser, setCurrentUser, url, setCurrentChild } = useContext(DataContext);
 
  const openModal = () => setVisibilityModal(true);
  const openModal1 = () => setVisibilityModal1(true);
  const openModal2 = () => setVisibilityModal2(true);
  const openModal3 = () => setVisibilityModal3(true);
  const openModal4 = () => setVisibilityModal4(true);

  useEffect(() => {
    if(usuario){
      if (usuario.invalid){
        openModal3();
      }
      else if (usuario.estado === 2){
      }else if (usuario.estado === 0){
        openModal();
      }else if (usuario.estado === 1){
        openModal2();
      }
      else{
        openModal1();
      }
    }
  }, [usuario, currentUser])

  const handleEmailChange = () => {
    fetch(url+"auth/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
    .then((response) => {
      if (response.status != 404)
        return response.json()
      return
    })
    .then((res) => {
      if(res) 
        setUsuario(res)
      else
        setUsuario({invalid: true})
    })
    .catch((error) => {
      console.error("Error auth mail:", error);
    });
  };

  const handleLoginClick = () => {
    if(email === "" || password === "")
    {
      Toast.show({ 
        type: 'error', 
        position: 'bottom',
        text1: 'Por favor complete el usuario y la contraseña'
      });
      setEmail("");
      setPassword("");
    }else{
      fetch(url+"users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({mail: email.toLowerCase(), contrasena: password}),
      })
      .then((response) => {
        if (response.status != 401){
          return response.json();
        }
        else
          openModal1();
      })
      .then(res => {
        if(!res.error){
          fetch(url+"users/childs",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({id: res.id}),
          })
          .then((child) => {
            Toast.show({ 
              type: 'success', 
              position: 'bottom',
              text1: `Login exitoso! Bienvenido ${res.nombre}`         
            });
            setCurrentUser(res);
            setCurrentChild(child)
            setEmail("");
            setPassword("");
            props.navigation.navigate('Home');
          })          
        }else{
          Toast.show({ 
            type: 'error', 
            position: 'bottom',
            text1: 'Nombre de usuario o contraseña incorrectos'
          });
          setEmail("");
          setPassword("");
          console.log("Error login:", res.error);
        }
      })
      .catch((error) => {
        Toast.show({ 
          type: 'error', 
          position: 'bottom',
          text1: 'Nombre de usuario o contraseña incorrectos'
        });
        console.error("Error login:", error);
      });
    }
    
  };

  const handleContinueClick = (e) => {
    props.navigation.navigate('Home');
  };
  const handleRegisterClick = (e) => {
    props.navigation.navigate('Registro');
  };
  const closeModal = () => {
    setVisibilityModal(false)
    props.navigation.navigate('Home');
  };
  const closeModal1 = () => {
    setVisibilityModal1(false);
  };
  const closeModal2 = () => {
    setVisibilityModal2(false);
  };
  const closeModal3 = () => {
    setVisibilityModal3(false);
    props.navigation.navigate('Registro');
  };
  const closeModal4 = () => {
    setVisibilityModal2(false);
    props.navigation.navigate('Home');
  };
  return (
    <ScrollView style={styles.mainContainer}  scrollEnabled = {false}>
      <View style={{ marginTop:70 }}>
        <View style={{ paddingTop: 20, paddingBottom: 50 }}>
          <Text style={styles.title}>Email</Text>
          <TextInput style={styles.input}  onChangeText={text => setEmail(text)} value={email}></TextInput>
          
          
          <Text style={styles.title}>Contraseña</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => setPassword(text)} value={password}></TextInput>
        </View>

          <Button 
            buttonStyle={styles.buttonLogin}
            title='Iniciar sesión'
            onPress={handleLoginClick}
          />

          <Button 
            buttonStyle={styles.buttonLogin}
            title='Registrarse'
            onPress={handleRegisterClick}
          />
          {/* <Button 
            buttonStyle={styles.buttonLogin}
            title='Continuar como invitado'
            onPress={handleContinueClick}
          /> */}
          <Modal
            offset={0}
            open={visibilityModal}
            overlayStyle={{backgroundColor:'transparent'}}
          >
            <View style={styles.confirmationModal}>
              <Text style={styles.modalTitle}>Registro en proceso de verificación.</Text>
              <Text style={{fontSize: 15, margin: 20}}>Se le notificará por mail cuando esté habilitado para ingresar.</Text>
              <Button style={styles.modalButton} buttonStyle={{backgroundColor: '#18A0E2'}} title='Aceptar' type='solid' onPress={closeModal}/>
            </View>
          </Modal>
          <Modal
            offset={0}
            open={visibilityModal1}
            overlayStyle={{backgroundColor:'transparent'}}
          >
            <View style={styles.confirmationModal}>
              <Text style={styles.modalTitle}>Los datos ingresados son incorrectos.</Text>
              <Text style={{fontSize: 15, margin: 20}}>Verifique la contraseña ingresada.</Text>
              <Button style={styles.modalButton} buttonStyle={{backgroundColor: '#18A0E2'}} title='Aceptar' type='solid' onPress={closeModal1}/>
            </View>
          </Modal>
          <Modal
            offset={0}
            open={visibilityModal2}
            overlayStyle={{backgroundColor:'transparent'}}
          >
            <View style={styles.confirmationModal}>
              <Text style={styles.modalTitle}>¡Bienvenido a SubastApp!</Text>
              <Text style={{fontSize: 15, margin: 20}}>A continuación, ingrese su nueva contraseña.</Text>
              <Button style={styles.modalButton} buttonStyle={{backgroundColor: '#18A0E2'}} title='Aceptar' type='solid' onPress={closeModal2}/>
            </View>
          </Modal>
          <Modal
            offset={0}
            open={visibilityModal3}
            overlayStyle={{backgroundColor:'transparent'}}
          >
            <View style={styles.confirmationModal}>
              <Text style={styles.modalTitle}>Usuario no registrado.</Text>
              <Text style={{fontSize: 15, margin: 20}}>Para ingresar a la aplicación, debe registrarse primero.</Text>
              <Button style={styles.modalButton} buttonStyle={{backgroundColor: '#18A0E2'}} title='Aceptar' type='solid' onPress={closeModal3}/>
            </View>
          </Modal>
          <Modal
            offset={0}
            open={visibilityModal4}
            overlayStyle={{backgroundColor:'transparent'}}
          >
            <View style={styles.confirmationModal}>
              <Text style={styles.modalTitle}>¡Felicidades!</Text>
              <Text style={{fontSize: 15, margin: 20}}>Contraseña exitosamente creada. No olvides anotarla por las dudas :)</Text>
              <Button style={styles.modalButton} buttonStyle={{backgroundColor: '#18A0E2'}} title='Aceptar' type='solid' onPress={closeModal4}/>
            </View>
          </Modal>
      </View>
    </ScrollView>
  );
}