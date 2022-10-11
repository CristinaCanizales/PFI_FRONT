import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import DatePicker from "@dietime/react-native-date-picker";
import { DataContext } from "../context";

const { width, height } = Dimensions.get("screen");

export default function Register(props) {
  const { navigation } = props;
  const { deportes, jugadores, url } = useContext(DataContext);
  const styles = StyleSheet.create({
    registerContainer: {
      width: width * 0.9,
      height: height * 0.875,
      backgroundColor: "#F4F5F7",
      borderRadius: 4,
      shadowColor: argonTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1,
      overflow: "hidden",
    },
    buttonVideo: {
      borderRadius: 10,
      alignSelf: "center",
      width: 150,
      height: 150,
    },
    inputIcons: {
      marginRight: 12,
    },
    passwordCheck: {
      paddingLeft: 15,
      paddingTop: 13,
      paddingBottom: 30,
    },
    createButton: {
      width: width * 0.3,
      marginTop: 25,
    },
    btnIcon: {
      height: 20,
      width: 20,
      marginRight: 10,
    },
  });
  const [date, setDate] = useState(new Date());
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [contrasena2, setContrasena2] = useState("");
  const [direccion, setDireccion] = useState("");
  const [dni, setDNI] = useState("");

  function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = date;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }

  function handleRegister() {
    const usuario = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      contrasena: contrasena,
      direccion: direccion,
      telefono: dni,
      edad: calcularEdad(),
      // foto: foto
    };
    fetch(url + "usuarios/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.status != 404) {
          return response.json();
        }
        return;
      })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          navigation.navigate("Home");
        } else {
          setUsuario({ invalid: true });
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
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex>
              <Block flex={0.17} middle>
                <Text bold color="#8898AA" size={30}>
                  Registrate
                </Text>
              </Block>
              <Block flex center>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <Block row width={width * 0.8} style={{ marginBottom: 5 }}>
                    <Block>
                      <Input
                        style={{
                          width: 450,
                          marginRight: 125,
                          shadowColor: argonTheme.COLORS.BLACK,
                          shadowOffset: { width: 0, height: 1 },
                          shadowRadius: 2,
                          shadowOpacity: 0.05,
                          elevation: 2,
                        }}
                        placeholder="Nombre"
                        iconContent={<></>}
                        value={nombre}
                        onChangeText={(nombre) => setNombre(nombre)}
                      />
                      {nombre === "" && (
                        <Block>
                          <Text bold size={14} color={argonTheme.COLORS.ERROR}>
                            Campo requerido
                          </Text>
                        </Block>
                      )}
                    </Block>
                    <Block>
                      <Input
                        style={{
                          width: 450,
                          shadowColor: argonTheme.COLORS.BLACK,
                          shadowOffset: { width: 0, height: 1 },
                          shadowRadius: 2,
                          shadowOpacity: 0.05,
                          elevation: 2,
                        }}
                        placeholder="Apellido"
                        iconContent={<></>}
                        value={apellido}
                        onChangeText={(apellido) => setApellido(apellido)}
                      />
                      {apellido === "" && (
                        <Block>
                          <Text bold size={14} color={argonTheme.COLORS.ERROR}>
                            Campo requerido
                          </Text>
                        </Block>
                      )}
                    </Block>
                  </Block>
                  <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                    <Input
                      placeholder="Correo"
                      iconContent={<></>}
                      value={correo}
                      onChangeText={(correo) => setCorreo(correo)}
                    />
                    {correo === "" && (
                      <Block>
                        <Text bold size={14} color={argonTheme.COLORS.ERROR}>
                          Campo requerido
                        </Text>
                      </Block>
                    )}
                  </Block>
                  <Block row width={width * 0.8}>
                    <Input
                      style={{
                        width: 450,
                        marginRight: 125,
                        shadowColor: argonTheme.COLORS.BLACK,
                        shadowOffset: { width: 0, height: 1 },
                        shadowRadius: 2,
                        shadowOpacity: 0.05,
                        elevation: 2,
                      }}
                      password
                      viewPass
                      placeholder="Contraseña"
                      iconContent={<></>}
                      value={contrasena}
                      onChangeText={(contrasena) => setContrasena(contrasena)}
                    />
                    <Input
                      style={{
                        width: 450,
                        shadowColor: argonTheme.COLORS.BLACK,
                        shadowOffset: { width: 0, height: 1 },
                        shadowRadius: 2,
                        shadowOpacity: 0.05,
                        elevation: 2,
                      }}
                      password
                      viewPass
                      placeholder="Repetir contraseña"
                      iconContent={<></>}
                      value={contrasena2}
                      onChangeText={(contrasena) => setContrasena2(contrasena)}
                    />
                  </Block>
                  {(contrasena === "" || contrasena !== contrasena2) && (
                    <Block>
                      <Text bold size={14} color={argonTheme.COLORS.ERROR}>
                        Las contraseñas deben ser iguales
                      </Text>
                    </Block>
                  )}
                  <Block width={width * 0.8}>
                    <Input
                      placeholder="Dirección"
                      iconContent={<></>}
                      value={direccion}
                      onChangeText={(direccion) => setDireccion(direccion)}
                    />
                  </Block>
                  <Block row width={width * 0.8}>
                    <Text size={20} style={{ marginRight: 20, marginTop: 20 }}>
                      Fecha de nacimiento:
                    </Text>
                    <Block style={{ height: 80, marginRight: 65 }}>
                      <DatePicker
                        height={80}
                        width={300}
                        fontSize={20}
                        value={date}
                        startYear={new Date().getFullYear() - 100}
                        endYear={new Date().getFullYear()}
                        onChange={(value) => setDate(value)}
                        format="dd-mm-yyyy"
                      />
                    </Block>
                    <Block>
                      <Input
                        style={{
                          width: 450,
                          shadowColor: argonTheme.COLORS.BLACK,
                          shadowOffset: { width: 0, height: 1 },
                          shadowRadius: 2,
                          shadowOpacity: 0.05,
                          elevation: 2,
                        }}
                        placeholder="DNI"
                        iconContent={<></>}
                        value={dni}
                        onChangeText={(dni) => setDNI(dni)}
                      />
                      {dni === "" && (
                        <Block>
                          <Text bold size={14} color={argonTheme.COLORS.ERROR}>
                            Campo requerido
                          </Text>
                        </Block>
                      )}
                    </Block>
                  </Block>
                  <Block width={width * 0.8}></Block>
                  <Block width={width * 0.8}>
                    <Text center size={20}>
                      Foto:
                    </Text>
                    <Button
                      title="+"
                      style={styles.buttonVideo}
                      // onPress={pickImage}
                      color="#9FCAF5"
                    >
                      <Image
                        source={require("../assets/icons/yoga.png")}
                        style={styles.buttonVideo}
                      />
                    </Button>
                  </Block>
                  <Block row width={width * 0.75}>
                    <Checkbox
                      checkboxStyle={{
                        borderWidth: 3,
                      }}
                      color={argonTheme.COLORS.PRIMARY}
                      label="Acepto los"
                    />
                    <Button
                      style={{ width: 100, marginRight: 110 }}
                      color="transparent"
                      textStyle={{
                        color: argonTheme.COLORS.PRIMARY,
                        fontSize: 14,
                      }}
                    >
                      Términos y condiciones
                    </Button>
                    <Button
                      color="primary"
                      disabled={
                        contrasena === "" ||
                        contrasena !== contrasena2 ||
                        correo === "" ||
                        nombre === "" ||
                        apellido === ""
                      }
                      style={styles.createButton}
                      onPress={() => handleRegister()}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        Crear cuenta
                      </Text>
                    </Button>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}
