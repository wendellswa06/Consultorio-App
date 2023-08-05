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


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.NavBar}>
      
      <View style={{ flexDirection:'column', justifyContent: 'space-evenly', width:'100%', paddingTop: '4%', }}>
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.titulo,
      letterSpacing: 2, alignItems: "center"}}>Perfil</Text>    
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
    //backgroundColor: 'red',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius:13,
    //position: 'absolute'
    borderColor: Colors.bordernav,
    borderWidth: 0.3,

    },

});