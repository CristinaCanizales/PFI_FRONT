import React from "react";
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

const { width, height } = Dimensions.get("screen");

export default function Register(props) {
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
    socialConnect: {
      backgroundColor: argonTheme.COLORS.WHITE,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "#8898AA",
    },
    socialButtons: {
      width: 120,
      height: 40,
      backgroundColor: "#fff",
      shadowColor: argonTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1,
    },
    socialTextButtons: {
      color: argonTheme.COLORS.PRIMARY,
      fontWeight: "800",
      fontSize: 14,
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
      width: width * 0.5,
      marginTop: 25,
    },
    btnIcon: {
      height: 20,
      width: 20,
      marginRight: 10,
    },
  });
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={0.25} middle style={styles.socialConnect}>
              <Text color="#8898AA" size={16}>
                Regístrate con
              </Text>
              <Block row style={{ marginTop: theme.SIZES.BASE }}>
                <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                  <Block row>
                    <Image
                      source={require("../assets/icons/facebook.png")}
                      style={styles.btnIcon}
                    />
                    <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                  </Block>
                </Button>
                <Button style={styles.socialButtons}>
                  <Block row>
                    <Image
                      source={require("../assets/icons/google.png")}
                      style={styles.btnIcon}
                    />
                    <Text style={styles.socialTextButtons}>GOOGLE</Text>
                  </Block>
                </Button>
              </Block>
            </Block>
            <Block flex>
              <Block flex={0.17} middle>
                <Text color="#8898AA" size={16}>
                  o de la manera clásica
                </Text>
              </Block>
              <Block flex center>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      borderless
                      placeholder="Nombre"
                      iconContent={<></>}
                    />
                  </Block>
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      borderless
                      placeholder="Correo"
                      iconContent={<></>}
                    />
                  </Block>
                  <Block width={width * 0.8}>
                    <Input
                      password
                      borderless
                      placeholder="Contraseña"
                      iconContent={<></>}
                    />
                    <Block row style={styles.passwordCheck}>
                      <Text size={12} color={argonTheme.COLORS.MUTED}>
                        fuerza de la contraseña:
                      </Text>
                      <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                        {" "}
                        fuerte
                      </Text>
                    </Block>
                  </Block>
                  <Block row width={width * 0.75}>
                    <Checkbox
                      checkboxStyle={{
                        borderWidth: 3,
                      }}
                      color={argonTheme.COLORS.PRIMARY}
                      label="Acepto la"
                    />
                    <Button
                      style={{ width: 100 }}
                      color="transparent"
                      textStyle={{
                        color: argonTheme.COLORS.PRIMARY,
                        fontSize: 14,
                      }}
                    >
                      Política de privacidad
                    </Button>
                  </Block>
                  <Block middle>
                    <Button color="primary" style={styles.createButton}>
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