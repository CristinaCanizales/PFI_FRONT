import React, { useContext, useState } from "react";

import { ScrollView, Text, View } from "react-native";
import { Button, Input } from "../components";
import ModalSelector from "react-native-modal-selector";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import mime from "mime";

export default function Videos(props) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [artista, setArtista] = useState("");
  const [fecha, setFecha] = useState("");
  const [contexto, setContexto] = useState("");
  const [duenio, setDuenio] = useState("");
  const [curiosidades, setCuriosidades] = useState("");
  const [disenador, setDisenador] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [url, setUrl] = useState("");

  const checkTextInput = (e) => {
    if (!nombre.trim()) {
      alert("Por favor, ingrese nombre del producto");
      return;
    }
    if (!descripcion.trim()) {
      alert("Por favor, ingrese descripcion del producto");
      return;
    }
    handleButtonClick();
  };
  async function imageUploader(files) {
    const newUri = "file://" + files.split("file:/").join("");
    console.log(newUri, mime.getType(newUri));
    let photo = {
      uri: newUri,
      type: mime.getType(newUri),
      name: newUri.split("/").pop(),
    };
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "dhnd6bdt");
    formData.append("resource_type", "image");
    console.log(formData);
    fetch("https://api.cloudinary.com/v1_1/subastapp/image/upload", {
      headers: {
        "content-type": "application/form-data",
      },
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("===>" + JSON.stringify(data));
        setImagenes(data.url);
      });
  }

  function handleButtonClick() {
    console.log(imagenes);
    const descr =
      tipo != "Arte" && tipo != "Objetos de diseñador"
        ? descripcion
        : artista + disenador + fecha + contexto + duenio + curiosidades;
    const nuevoProducto = {
      descripcionCatalogo: nombre,
      tipo: tipo,
      descripcionCompleta: descr,
      foto: imagenes,
      duenio: currentUser?.idCliente,
    };
    fetch(url + "productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify({ ...nuevoProducto }),
    })
      .then((response) => {
        //console.log(response.status+": "+JSON.stringify(response))
        return response.json();
      })
      .then((data) => {
        console.log("cargue el producto!" + JSON.stringify(data));
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
    <ScrollView style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text style={styles.title}>Título:</Text>
        <Input borderless placeholder="Título" iconContent={<></>} />
        <Text style={styles.title}>Tipo de video:</Text>
        <ModalSelector
          data={[
            { key: 0, label: "Entrenamiento" },
            { key: 1, label: "Grabación" },
          ]}
          overlayStyle={{ backgroundColor: "transparent" }}
          initValue="Seleccionar tipo de video"
          margin="50"
          style={styles.modalSelector}
          type="solid"
          key={tipo}
          onChange={(texto) => {
            setTipo(texto.label);
          }}
          initValueTextStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          optionTextStyle={{ color: "black" }}
          optionContainerStyle={{
            width: 400,
            alignSelf: "center",
          }}
          cancelContainerStyle={{ width: 400, alignSelf: "center" }}
          backdropPressToClose={true}
          cancelText="Cancelar"
        />

        <Text style={styles.title}>Descripción:</Text>
        <Input borderless placeholder="Descripción" iconContent={<></>} />

        <Text style={styles.title}>Fecha:</Text>
        <Input borderless placeholder="Nombre" iconContent={<></>} />

        {tipo === "Entrenamiento" && (
          <>
            {/* <TextInput
              style={styles.input}
              onChangeText={(text) => setArtista(text)}
              value={artista}
            /> */}

            <Text style={styles.title}>Detalle rutina:</Text>
            <Input
              borderless
              placeholder="Detalle rutina"
              iconContent={<></>}
            />
          </>
        )}

        <Text style={styles.title}>Video:</Text>
        <Button
          title="+"
          style={styles.btnimage}
          onPress={pickImage}
          color="#9FCAF5"
        />

        <Button
          title="Aceptar"
          style={styles.buttonLogin}
          onPress={checkTextInput}
        />
      </View>
    </ScrollView>
  );
}
