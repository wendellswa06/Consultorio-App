import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

//router
import { Actions } from 'react-native-router-flux'; 

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import atras from '../../../assets/images/atras.png';


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.NavBar}>
      
      <View style={{ flexDirection:'column', justifyContent: 'space-evenly', width:'100%', paddingTop: '4%', }}>
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.titulo, color: colors.colorprincipal,
      letterSpacing: 2, alignItems: "center"}}>Datos Personales</Text>    
      </View>

      <View style={{ position: 'absolute', height: '100%', 
        width: '100%', justifyContent: 'space-evenly', paddingTop: '4%', paddingLeft: '5%' }}>
      <TouchableOpacity onPress={() => Actions.pop()}>
      <Image source={atras} style={{ width: Texto.Iconatras, height: Texto.Iconatras}}/>     
      </TouchableOpacity>
      </View>
      </View>
     
    )}};
  

const styles = StyleSheet.create({
  
  NavBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '15%',
    //elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: 'white',
    //borderBottomLeftRadius: 13,
    //borderBottomRightRadius:13,
    //position: 'absolute'
    borderColor: colors.bordernav,
    //borderWidth: 0.3,

    },

});