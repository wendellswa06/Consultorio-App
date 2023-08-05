import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux'; 
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//componentes
import Botones from '../Perfil/botones'


export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.Contenedor_panel}>

      <Botones 
       Imagen = {require('../../../assets/images/Perfil.png')}
       name='Datos Personales'
       boton= {() => Actions.datospersonales()}
       />

       <Botones
       Imagen = {require('../../../assets/images/seguridad.png')}
       name='Seguridad'
       boton= {() => Actions.seguridad()}
       />

       <Botones
       Imagen = {require('../../../assets/images/contactanos.png')}
       name='Contactanos'
       boton= {() => Actions.contactanos()}
       />

       <Botones
       Imagen = {require('../../../assets/images/version.png')}
       name='Versión'
       boton= {() => Actions.version()}
       />

        </View>
    )}};


const styles = StyleSheet.create({
  
    Contenedor_panel: {
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    height: 450,
    alignItems: 'center',
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
});
