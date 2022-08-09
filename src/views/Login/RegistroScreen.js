import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import Modal from "react-native-simple-modal";
import { DataContext } from "../../context";
import Toast from 'react-native-toast-message';

export default function RegistroScreen(props) {
  const [ nombre, setNombre ] = useState("");
  const [ apellido, setApellido ] = useState("");
  const [ documento, setDNI ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ email2, setEmail2 ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ direccion, setDireccion ] = useState("");
  const [ contrasena, setContrasena ] = useState("");
  const [ contrasena2, setContrasena2 ] = useState("");
  const [ visibilityModal, setVisibilityModal ] = useState(false);
  const { url } = useContext(DataContext);

  const openModal = () => setVisibilityModal(true);

  const closeModal = () => {
    setVisibilityModal(false);
    props.navigation.navigate('Home');
  };

  const handleButtonClick = () => {
    const nuevoUsuario = {
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      mail: email,
      contrasena: contrasena,
      telefono: telefono
    };
    console.log("Nuevo usuario: ", JSON.stringify(nuevoUsuario));

    fetch(url + "users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then((response) => response.json())
      .then((data) => {
        Toast.show({ 
          type: 'success', 
          position: 'bottom',
          text1: `Usuario ${data.nombre} creado exitosamente!`         
        });
        props.navigation.navigate('Login');
        console.log("Success:", data);
      })
      .catch((error) => {
        Toast.show({ 
          type: 'error', 
          position: 'bottom',
          text1: `Error en la creacion del usuario`         
        });
        console.error("Error:", error);
      });

    // openModal();
  };
    return (
      <ScrollView style={styles.mainContainer} scrollEnabled={true}>
        <View style={{ marginTop: 60 }}>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setNombre(text)} value={nombre}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setApellido(text)} value={apellido}></TextInput>
          </View>
          {/* <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setDNI(text)} value={documento}></TextInput>
          </View> */}
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setTelefono(text)} value={telefono}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Dirección</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setDireccion(text)} value={direccion}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail(text)} value={email}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail2(text)} value={email2}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.inputRegisterScreen} onChangeText={text => setContrasena(text)} value={contrasena}></TextInput>
          </View>
          <View style={styles.registerInput}>
            <Text style={styles.titleRegisterScreen}>Confirmar contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.inputRegisterScreen} onChangeText={text => setContrasena2(text)} value={contrasena2}></TextInput>
          </View>

            { 
              !(nombre !== "" && apellido !== "" && telefono !== "" && direccion !== "" && email !== "" && email2 !== "") 
              &&  <Text style={styles.errorMail}>Todos los campos son obligatorios.</Text>
            } 

            { 
              !(contrasena === "" && contrasena2 === "" || contrasena === contrasena2) 
              && <Text style={styles.errorMail}>Las contraseñas deben coincidir.</Text> 
            }

            { 
              !(email === "" && email2 === "" || email === email2) 
              && <Text style={styles.errorMail}>Los mails deben coincidir.</Text> 
            }

            <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                disabled = { !(nombre !== "" && apellido !== "" && telefono !== "" && direccion !== "" && email !== "" && email2 !== "")  
                              || !(email === "" && email2 === "" || email === email2)
                              || !(contrasena === "" && contrasena2 === "" || contrasena === contrasena2)  }
                onPress={handleButtonClick}
            />
            {/* <Modal
              offset={0}
              open={visibilityModal}
              overlayStyle={{backgroundColor:'transparent'}}
            >
              <View style={styles.confirmationModal}>
                <Text style={styles.modalTitle}>Registro en proceso de verificación.</Text>
                <Text style={{fontSize: 15, margin: 20}}>Se le notificará por mail cuando esté habilitado para ingresar.</Text>
                <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModal}/>
              </View>
            </Modal> */}
        </View>
      </ScrollView>
    );
}
