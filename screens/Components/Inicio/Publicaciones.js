import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//constanstes cuadros dimenciones 
const  cuadro_ancho = '35%'
const  cuadro_alto = '70%'
const  text_cuadro_alto = '29%'
const  text_cuadro_ancho = '99%'



export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.Publicaciones}>   
      <Text style={{ width:'100%', textAlign:'left', fontSize: Texto.principal,paddingLeft: '4%', color: Colors.principal,shadowColor: Colors.sombramenu, 
    shadowOpacity: 0.9, shadowOffset:{  width: 0,  height: 0,  },letterSpacing: 0,}}></Text>

      <Text style={{ width:'100%', textAlign:'left', fontSize: Texto.segundario,paddingLeft: '4%', color: Colors.segundario,
      letterSpacing: 0,}}></Text>

      </View>
     
    )}};
  

 

const styles = StyleSheet.create({
  Publicaciones: {
    
    flexDirection: 'column',
    height: 120,
    width: width,
    top: '10%',
    //borderColor: '#e0e0e0',
    //backgroundColor: '#e0e0e0',

    },

});
