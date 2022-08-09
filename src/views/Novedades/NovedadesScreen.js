import React, { useContext, useCallback, useState } from "react";
import { Text, View, RefreshControl } from "react-native";
import { Card } from "react-native-elements";
import styles from "./styles";
import { DataContext } from "../../context";
import { ScrollView } from "react-native-gesture-handler";

export default function NovedadesScreen({ navigation }) {
  const { currentChild, currentUser, novedades, setNovedades, url } =
    useContext(DataContext);
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNovedades();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  function fetchNovedades() {
    fetch(url + "news/")
      .then((response) => response.json())
      .then((res) => {
        setNovedades(res);
      })
      .catch((e) => console.log("Error", e));
  }
  return (
    <ScrollView
      style={{ backgroundColor: "#D8F2FF" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {novedades.map((novedad, i) => {
          return (
            (currentUser.rolId === 2 ||
              novedad.gradoId === currentChild.gradoId) && (
              <Card key={i} containerStyle={{ width: "90%" }}>
                <Card.Title>{novedad.titulo}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>{novedad.contenido}</Text>
                <Card.Image source={{ uri: novedad.foto }}></Card.Image>
              </Card>
            )
          );
        })}
      </View>
    </ScrollView>
  );
}
