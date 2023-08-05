import React from 'react';
import {Button,Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';

//dimenciones
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes 
import Fondo  from '../assets/images/fondo-ilustrado.png' 

//Componentes
import Navbar from '../screens/Components/Inicio/Navbar' 
import Slider from './Components/Inicio/slider' 
import Registro from '../screens/Components/Inicio/Registro' 
import Espacio from '../screens/Components/Inicio/Publicaciones' 



export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      //imagen de fondo
      <ImageBackground source={Fondo} style={styles.fondo}>
      <Navbar/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Slider/>
      <Registro/>
      <Espacio/>
      </ScrollView>
      </ImageBackground>


    )}};
  
const styles = StyleSheet.create({

  fondo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    position: 'absolute'
    

  },
});
