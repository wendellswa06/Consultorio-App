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

      <View style={styles.Texto}>
      
      <Text style={{ width:'100%', textAlign:'left',fontSize: Texto.odontogramatitulo,paddingLeft: '5%',
      letterSpacing: 0, alignItems: "flex-start"}}>Escoge Un Tratamiento</Text>    
      </View>

     
     
    )}};
  

const styles = StyleSheet.create({
  
  Texto: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    //elevation: 1,
    alignItems: 'flex-start',
    //justifyContent: '',
    width: width,
    //backgroundColor: 'red',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius:13,
    //position: 'absolute'
    borderColor: Colors.bordernav,
    borderWidth: 0.3,
    top: '-1%'
    },

});
