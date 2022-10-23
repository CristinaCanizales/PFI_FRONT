import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Text } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { DataContext } from "../context";

const { width, height } = Dimensions.get("screen");

export default function Login(props) {
  const { navigation } = props;
  const { currentUser, setCurrentUser, url } = useContext(DataContext);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const styles = StyleSheet.create({
    loginContainer: {
      width: width * 0.5,
      height: height * 0.5,
      backgroundColor: "#F4F5F7",
      borderRadius: 10,
      shadowColor: argonTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1,
      overflow: "hidden",
      paddingTop: 60,
    },
    inputIcons: {
      marginRight: 12,
    },
    createButton: {
      width: width * 0.3,
      marginTop: 25,
    },
    passButton: {
      width: width * 0.15,
      height: 20,
    },
  });

  function checkInput() {
    if (!correo.trim() || !contrasena.trim()) {
      alert("Debe ingresar usuario y contraseña para iniciar sesión.");
      return false;
    } else {
      handleLogin();
    }
    return true;
  }

  useEffect(() => {
    console.log("hola", currentUser);
  }, [currentUser]);

  function handleLogin() {
    const usuario = {
      correo: correo,
      contrasena: contrasena,
    };
    fetch(url + "usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.status != 404) {
          alert("¡Bienvenido a My Team Stats!");
          return response.json();
        } else {
          alert("Los datos ingresados son incorrectos.");
          setCorreo("");
          setContrasena("");
        }
        return;
      })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setCorreo("");
          setContrasena("");
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={require("../assets/icons/stats.png")}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.loginContainer}>
            <Block flex={0.17} middle>
              <Text bold color="#8898AA" size={40}>
                Iniciá sesión
              </Text>
            </Block>
            <Block flex center>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
              >
                <Block width={width * 0.3} style={{ marginBottom: 15 }}>
                  <Input
                    fontSize={40}
                    borderless
                    placeholder="Correo"
                    type="email-address"
                    iconContent={<></>}
                    value={correo}
                    onChangeText={(correo) => setCorreo(correo)}
                  />
                </Block>
                <Block width={width * 0.3}>
                  <Input
                    password
                    viewPass
                    borderless
                    placeholder="Contraseña"
                    iconContent={<></>}
                    value={contrasena}
                    onChangeText={(pass) => setContrasena(pass)}
                  />
                  {/* <Block row style={styles.passwordCheck}>
                    <Button color="input" style={styles.passButton}>
                      <Text bold size={15} color={argonTheme.COLORS.PRIMARY}>
                        Recuperar Contraseña
                      </Text>
                    </Button>
                  </Block> */}
                </Block>
                <Block middle>
                  <Button
                    color="primary"
                    style={styles.createButton}
                    onPress={() => checkInput()}
                  >
                    <Text bold size={20} color={argonTheme.COLORS.WHITE}>
                      Iniciar sesión
                    </Text>
                  </Button>
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}
