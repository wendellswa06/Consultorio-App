import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

//Notificationes.png

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes


export default class Pacientes extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.Pacientes}>
      
      <View style={{ flexDirection:'column', width:'100%', }}>
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.pacientesnumero,paddingTop: '5%',
      letterSpacing: 0, alignItems: "center"}}>10</Text> 

      <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center',}}>
      <Text style={{ textAlign:'center',fontSize: Texto.pacientestexto, marginRight: 7,
      letterSpacing: 0, alignItems: "center"}}>Total</Text>

      <Text style={{  textAlign:'center',fontSize: Texto.pacientestexto, color: Colors.nombre,
      letterSpacing: 0, alignItems: "center"}}>Pacientes</Text>
      </View> 
      </View>

     
      </View>
     
    )}};
  

const styles = StyleSheet.create({
  
  Pacientes: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 250,
    //elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    //backgroundColor: 'white',
    //borderBottomLeftRadius: 13,
    //borderBottomRightRadius:13,
    //position: 'absolute'
    //borderColor: Colors.bordernav,
    //borderWidth: 0.3,
    //backgroundColor:'red',
    top: '-3%',
    paddingTop: '-15%'

    },

});
