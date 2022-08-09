import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { DataContext } from "../../context";



export default function HomeScreen(props) {
    return (
      <ScrollView style={{backgroundColor: '#D8F2FF'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Información General</Text>
          <Text style={styles.body}>
            Bienvenidos a Schoology.{"\n"}{"\n"}
            En esta aplicación podrás encontrar diferentes secciones:{"\n"}
            {"\t"}• Home: es esta pantalla que explica brevemente la aplicación.{"\n"}
            {"\t"}• Profile: se encuentran los datos del usuario (padre/docente).{"\n"}
            {"\t"}• Calendario: en él se muestran los eventos que están por suceder.{"\n"}
            {"\t"}• Foro: espacio para intercambiar dudas/información con los demás padres/docentes a través de publicaciones y sus respectivos comentarios.{"\n"}
            {"\t"}• Novedades: esta es una "cartelera" en la que los docentes dejan información general pertinente de cada grado.{"\n"}{"\n"}
            {"\t\t\t\t\t"}¡Gracias!
        </Text>
        </View>

         
      </ScrollView>
    );
}