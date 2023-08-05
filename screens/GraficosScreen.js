import React from 'react';
import {Button,Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import {createStackNavigator, createAppContainer} from 'react-navigation';


//dimenciones
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


//imagenes 
import Fondo  from '../assets/images/fondo-ilustrado.png' 


//Componentes
import Navbar from '../screens/Components/Graficos/Navbar' 
import Pacientetotal from '../screens/Components/Graficos/pacientes' 
import Graficapaciente from './Components/Graficos/GraficaPacientes' 
import Graficagenero from './Components/Graficos/GraficaGenero' 
import GraficaEdad from './Components/Graficos/GraficaEdad'
import Tiempo from './Components/Graficos/Tiempo'




export default class GraficosScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      //imagen de fondo
      <ImageBackground source={Fondo} style={styles.fondo}>
      <Navbar/>
      <ScrollView showsVerticalScrollIndicator={false}>

      <Pacientetotal/>
      <Graficapaciente/>
      <Graficagenero/>
      <GraficaEdad/>
      <Tiempo/>
     
      

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
    //position: 'absolute'
    

  },
});
