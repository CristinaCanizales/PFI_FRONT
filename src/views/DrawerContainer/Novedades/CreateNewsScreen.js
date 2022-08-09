import React, { useContext, useState } from 'react';
import { Text, View, Image, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import ModalSelector from "react-native-modal-selector";
import styles from "./styles";
import { DataContext } from "../../context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import mime from "mime";
import * as ImagePicker from "expo-image-picker";

const CreateNewsScreen = ({ navigation }) => {
  const { currentUser, currentChild, url } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [grade, setGrade] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [tipo, setTipo] = useState(null);
  const [imagen, setImagen] = useState("");
  let today = new Date().toISOString().slice(0, 10);

  const data = [
    { key: 1, label: "Información" },
    { key: 2, label: "Evento" },
  ];

  const handleCreateNews = () => {
    const novedad = {
      usuarioId: currentUser.id,
      gradoId:
        currentUser.rolId === 2
          ? parseInt(grade)
          : parseInt(currentChild.gradoId),
      titulo: title,
      foto: imagen || null,
      contenido: content,
    };
    const evento = {
      usuarioId: currentUser.id,
      gradoId:
        currentUser.rolId === 2
          ? parseInt(grade)
          : parseInt(currentChild.gradoId),
      titulo: title,
      foto: imagen || null,
      contenido: content,
      fecha_inicio: date1,
      fecha_fin: date2,
    };
    fetch(url + "news/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipo != "Evento" ? novedad : evento),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigation.navigate("Novedades");
  };

  const handleImageClick = async () => {
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
  async function imageUploader(files) {
    const newUri = "file://" + files.split("file:/").join("");
    let photo = {
      uri: newUri,
      type: mime.getType(newUri),
      name: newUri.split("/").pop(),
    };
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "toplzbbn");
    formData.append("resource_type", "image");
    fetch("https://api.cloudinary.com/v1_1/guariqueteo/image/upload", {
      headers: {
        "content-type": "application/form-data",
      },
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("===>" + JSON.stringify(data));
        setImagen(data.url);
      });
  }

  return (
    <ScrollView style={styles.mainContainer} scrollEnabled={false}>
      <View>
        {tipo === null && (
          <>
            <Text style={styles.title}>Tipo de novedad</Text>
            <ModalSelector
              overlayStyle={{ backgroundColor: "transparent" }}
              data={data}
              initValue="Seleccionar"
              margin="50"
              style={styles.modalSelector}
              type="solid"
              key={tipo}
              onChange={(texto) => {
                setTipo(texto.label);
              }}
              backdropPressToClose={true}
            />
          </>
        )}
        {tipo !== null && (
          <>
            <Text style={styles.title}>Título</Text>
            <TextInput
              label="Titulo"
              style={styles.input}
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <Text style={styles.title}>Contenido</Text>
            <TextInput
              label="Contenido"
              style={styles.input}
              height={70}
              onChangeText={(text) => setContent(text)}
              value={content}
            />
            {currentUser.rolId === 2 && (
              <>
                <Text style={styles.title}>Grado</Text>
                <TextInput
                  label="Grado"
                  style={styles.input}
                  width={50}
                  onChangeText={(text) => setGrade(text)}
                  value={grade}
                />
              </>
            )}
            <TouchableHighlight onPress={handleImageClick}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    imagen == ""
                      ? "https://res.cloudinary.com/guariqueteo/image/upload/v1638414211/add-image_fqz7xn.png"
                      : imagen,
                }}
              />
            </TouchableHighlight>
          </>
        )}

        {tipo === "Evento" && (
          <>
            <Text style={styles.title}>Inicio</Text>
            <DatePicker
              style={{ width: 230, alignSelf: "center", marginBottom: 10 }}
              date={today}
              mode="datetime"
              placeholder="Seleccionar"
              format="YYYY-MM-DD hh:mm:ss"
              minDate={today}
              maxDate="2022-12-31"
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  alignContent: "center",
                  borderRadius: 15,
                  borderColor: "#47AFE3",
                },
                dateTouchBody: {
                  color: "black",
                },
                btnTextConfirm: {
                  color: "#47AFE3",
                },
                datePickerCon: {
                  width: 250,
                  alignSelf: "center",
                  borderRadius: 15,
                  height: 200,
                  paddingRight: 15,
                },
              }}
              onDateChange={(date) => {
                console.log("fecha1", date);
                setDate1(date);
                console.log("fecha11", date1);
              }}
            />
            <Text style={styles.title}>Fin</Text>
            <DatePicker
              style={{ width: 230, alignSelf: "center" }}
              date={today}
              mode="datetime"
              placeholder="Seleccionar"
              format="YYYY-MM-DD hh:mm:ss"
              minDate={today}
              maxDate="2022-12-31"
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  alignContent: "center",
                  borderRadius: 15,
                  borderColor: "#47AFE3",
                },
                dateTouchBody: {
                  color: "black",
                },
                btnTextConfirm: {
                  color: "#47AFE3",
                },
                datePickerCon: {
                  width: 250,
                  alignSelf: "center",
                  borderRadius: 15,
                  height: 200,
                  paddingRight: 15,
                },
              }}
              onDateChange={(date) => {
                setDate2(date);
              }}
            />
          </>
        )}
        <Button
          style={styles.button}
          buttonStyle={{
            backgroundColor: "#18A0E2",
            width: 100,
            alignSelf: "center",
          }}
          title="Crear"
          onPress={handleCreateNews}
        />
      </View>
    </ScrollView>
  );
};

export default CreateNewsScreen;
