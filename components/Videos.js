import React, { useContext, useState } from "react";

import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";

export default function Videos(props) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [detalleRutina, setDetalleRutina] = useState("");
  const [fecha, setFecha] = useState("");
  const [categoria, setCategoria] = useState("");
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState("");
  const styles = StyleSheet.create({
    modalSelector: {
      justifyContent: "space-around",
      alignSelf: "center",
      width: 300,
      height: 40,
      backgroundColor: "#9bdcfa",
      borderRadius: 5,
    },
    buttonVideo: {
      borderRadius: 10,
      alignSelf: "center",
      width: 200,
      height: 200,
    },
    button: {
      borderRadius: 20,
      backgroundColor: "#9bdcfa",
      textAlign: "center",
      width: 180,
      alignSelf: "center",
      margin: 10,
    },
  });
  const checkTextInput = (e) => {
    if (!titulo.trim()) {
      alert("Por favor, ingrese el titulo del video");
      return;
    }
    handleButtonClick();
  };
  async function imageUploader(files) {
    const newUri = "file://" + files.split("file:/").join("");
    console.log(newUri, mime.getType(newUri));
    let video = {
      uri: newUri,
      type: mime.getType(newUri),
      name: newUri.split("/").pop(),
    };
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "pfi_cloudinary");
    formData.append("resource_type", "video");
    console.log(formData);
    fetch("https://api.cloudinary.com/guariqueteo/home/pfi/video/upload", {
      headers: {
        "content-type": "application/form-data",
      },
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("===>" + JSON.stringify(data));
        setVideos(data.url);
      });
  }

  function handleButtonClick() {
    console.log(videos);
    const nuevoVideo = {
      tituloVideo: titulo,
      tipo: tipo,
      categoria: categoria,
      detalleRutina: detalleRutina,
      fecha: fecha,
      video: videos,
    };
    fetch(url + "grabaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify({ ...nuevoVideo }),
    })
      .then((response) => {
        //console.log(response.status+": "+JSON.stringify(response))
        return response.json();
      })
      .then((data) => {
        console.log("cargue el video!" + JSON.stringify(data));
      });
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 600,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      imageUploader(result.uri);
    }
  };
  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Título:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<Block />}
            onChangeText={(text) => setTitulo(text)}
            value={titulo}
          />
        </Block>
        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Tipo de video:
          </Text>
          <ModalSelector
            data={[
              { key: 0, label: "Entrenamiento" },
              { key: 1, label: "Grabación" },
            ]}
            overlayStyle={{ backgroundColor: "transparent" }}
            initValue={tipo.label || "Seleccionar tipo de video"}
            margin="50"
            style={styles.modalSelector}
            type="solid"
            key={tipo}
            onChange={(texto) => {
              setTipo(texto);
            }}
            initValueTextStyle={{
              fontWeight: "500",
              color: "black",
            }}
            optionTextStyle={{ color: "black" }}
            optionContainerStyle={{
              backgroundColor: "white",
              width: 400,
              alignSelf: "center",
              borderColor: "#9bdcfa",
            }}
            cancelContainerStyle={{
              backgroundColor: "#9bdcfa",
              width: 400,
              alignSelf: "center",
            }}
            backdropPressToClose={true}
            cancelText="Cancelar"
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Categoría:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setCategoria(text)}
            value={categoria}
          />
        </Block>

        <Block center row style={{ marginBottom: 10 }}>
          <Text h5 style={{ marginRight: 20 }}>
            Fecha:
          </Text>
          <Input
            placeholder="..."
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 5,
              backgroundColor: "#fff",
              width: 400,
              alignSelf: "center",
            }}
            iconContent={<></>}
            onChangeText={(text) => setFecha(text)}
            value={fecha}
          />
        </Block>

        {tipo === "Entrenamiento" && (
          <>
            <Block center style={{ marginBottom: 10 }}>
              <Text h5>Detalle rutina:</Text>
              <Input
                placeholder="..."
                style={{ width: 600, minHeight: 150 }}
                multiline={true}
                borderless
                iconContent={<></>}
                onChangeText={(text) => setDetalleRutina(text)}
                value={detalleRutina}
              />
            </Block>
          </>
        )}

        <Text center h4>
          Video:
        </Text>
        <Button
          title="+"
          style={styles.buttonVideo}
          onPress={pickImage}
          color="#9FCAF5"
        >
          <Image
            source={require("../assets/icons/yoga.png")}
            style={styles.buttonVideo}
          />
        </Button>

        <Button
          style={styles.button}
          textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
          onPress={checkTextInput}
        >
          Subir video
        </Button>
      </View>
    </ScrollView>
  );
}
