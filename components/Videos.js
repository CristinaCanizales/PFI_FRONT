import React, { useContext, useState } from "react";

import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "@dietime/react-native-date-picker";
import mime from "mime";
//galio
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants";
import { DataContext } from "../context";

export default function Videos(props) {
  const { partidos, url } = useContext(DataContext);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState({});
  const [detalleRutina, setDetalleRutina] = useState("");
  const [videoEntrenamiento, setVideoEntrenamiento] = useState("");
  const [partidoSeleccionado, setPartidoSeleccionado] = useState("");
  const [categoria, setCategoria] = useState("");
  const [videoGrabacion, setVideoGrabacion] = useState({});
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
  const partidosMap = partidos.map((item, index) => {
    return { key: index + 1, label: item.fechaPartido };
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
    //video: JPjUmLNQkxI
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
        setVideoGrabacion(data.url);
      });
  }

  function handleButtonClick() {
    let nuevoVideo;
    if (tipo.label === "Entrenamiento") {
      nuevoVideo = {
        titulo: titulo,
        detalleRutina: detalleRutina,
        categoria: categoria,
        video: videoEntrenamiento,
      };
    } else {
      nuevoVideo = {
        titulo: titulo,
        fecha: partidoSeleccionado.label,
        partidoId: partidoSeleccionado.key,
        video: videoGrabacion,
      };
    }
    const path =
      tipo.label === "Entrenamiento"
        ? "entrenamientos/nuevo"
        : "grabaciones/nuevo";
    fetch(url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(nuevoVideo),
    })
      .then((data) => {
        console.log("Success:", data);
        setTitulo("");
        setTipo({});
        setDetalleRutina("");
        setVideoEntrenamiento("");
        setPartidoSeleccionado("");
        setCategoria("");
        setVideoGrabacion({});
      })
      .catch((error) => {
        console.error("Error:", error);
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

        {tipo.label === "Entrenamiento" && (
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
        )}

        {tipo.label === "Grabación" && (
          <Block>
            <ModalSelector
              data={partidosMap}
              overlayStyle={{ backgroundColor: "transparent" }}
              initValue={partidoSeleccionado.label || "Seleccionar Partido"}
              margin="50"
              style={styles.modalSelector}
              type="solid"
              key={partidoSeleccionado}
              onChange={(partido) => {
                setPartidoSeleccionado(partido);
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
            {/* <Block center row style={{ marginBottom: 10 }}>
              <Text h5 style={{ marginRight: 20 }}>
                Fecha:
              </Text>
              <Block style={{ height: 80 }}>
                <DatePicker
                  height={90}
                  width={300}
                  value={fecha}
                  startYear={2000}
                  endYear={2100}
                  onChange={(value) => setFecha(value)}
                  format="dd-mm-yyyy"
                />
              </Block>
            </Block> */}
          </Block>
        )}

        {tipo.label === "Entrenamiento" && (
          <>
            <Block center style={{ marginBottom: 10 }}>
              <Text h5>Detalle rutina:</Text>
              <Input
                placeholder="..."
                style={{
                  width: 600,
                  minHeight: 100,
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 5,
                }}
                multiline={true}
                iconContent={<></>}
                onChangeText={(text) => setDetalleRutina(text)}
                value={detalleRutina}
              />
            </Block>
            <Block center row style={{ marginBottom: 10 }}>
              <Text h5 style={{ marginRight: 20 }}>
                Video:
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
                onChangeText={(text) => setVideoEntrenamiento(text)}
                value={videoEntrenamiento}
              />
            </Block>
          </>
        )}

        {tipo.label === "Grabación" && (
          <>
            <Text center h4 style={{ marginTop: 20 }}>
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
          </>
        )}

        <Button
          style={styles.button}
          textStyle={{ fontSize: 25, fontWeight: "500", color: "black" }}
          onPress={() => handleButtonClick()}
        >
          Subir video
        </Button>
      </View>
    </ScrollView>
  );
}
