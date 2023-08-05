import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//componentes
import Barra from '../historiaclinica-nuevo/barra'
import Input from '../historiaclinica-nuevo/input'
import Descripciones from '../historiaclinica-nuevo/descripciones'
import Genero from '../historiaclinica-nuevo/genero'
import Antecedentes from '../historiaclinica-nuevo/antecedentes'
import Fecha from '../historiaclinica-nuevo/fechanacimiento'
import Boton from '../historiaclinica-nuevo/Boton'
import Espaciocorto from '../historiaclinica-nuevo/espaciocorto'
import Espacioamplio from '../historiaclinica-nuevo/espacioamplio'


export default class PerfilScreen extends React.Component {
  render() {
    return (

      <View style={styles.Contenedor_panel}>

      <Espacioamplio/>
      <Text style={styles.titulo}></Text>
      <Espaciocorto/>
      
      </View>
    )}};


const styles = StyleSheet.create({
  
    Contenedor_panel: {
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    height: 1950,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width,
    //top: '17%',
    //marginTop: '10%',

    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    //paddingTop: '-50%',
    marginTop: '-5%',
    //marginLeft: '20%',
    //marginRight: '20%',

    },

    titulo: {
      marginHorizontal: '6%',
      fontSize: Texto.titulo,
      color: colors.colorprincipal,
      //top: '10%'

    }
});
