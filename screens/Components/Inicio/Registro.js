import React from 'react';
import {Image, Platform, ScrollView, TouchableHighlight, StyleSheet,Text,TouchableOpacity,View,ImageBackground, Alert} from 'react-native';
import { Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux'; 
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//importaciones
import Categoria from './categorias' 
import Espacio from './Espacio' 

//imagenes
import historiaclinica  from '../../../assets/images/historiaclinica.png' 

export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.Registro}>   
      <Text style={{ width:'100%', textAlign:'left', fontSize: Texto.principal,paddingLeft: '4%', color: Colors.principal,
       shadowOpacity: 0.0, 
       shadowOffset:{  width: 0,  height: 0,  },
       letterSpacing: 0, paddingTop: '5%'}}>Registro</Text>


      <View style={{flexDirection: 'row',width:'100%', paddingTop: '3%', height: '95%' ,paddingLeft: '2%'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      
      <Categoria
      Imagen={require('../../../assets/images/historiaclinica.png')}
      name='Historia Clinica'
      color= '#003BDF'
      boton= {() => Actions.Historiaclinica()}
      />

      <Categoria
      Imagen={require('../../../assets/images/pacientes.png')}
      name='Pacientes'
      boton= {() => Actions.Pacientes()}
      />
    

      <Categoria
      Imagen={require('../../../assets/images/controles.png')}
      name='Controles'
      boton= {() => Actions.Controles()}
      />

      <Categoria
      Imagen={require('../../../assets/images/extraciones.png')}
      name='Extraciones'
      boton= {() => Actions.Extraciones()}
      />

      <Espacio/>

      </ScrollView>  
      </View>


      </View>

    )}};
  
const styles = StyleSheet.create({
  Registro: {
    flexDirection: 'column',
    height: 320,
    width: width,
    //borderColor: '#e0e0e0',
    //backgroundColor: '#e0e0e0',
    top: '-4%',

    },

});