import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Fondo  from '../assets/images/fondo-ilustrado.png' 

//Componentes
import Navbar from '../screens/Components/Odontograma/Navbar' 
import Texto from '../screens/Components/Odontograma/texto' 
import Slider from '../screens/Components/Odontograma/slider' 
import Contador from '../screens/Components/Odontograma/Contador' 
import Espacio from '../screens/Components/Odontograma/Publicaciones' 



export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <ImageBackground source={Fondo} style={styles.fondo}>
        <Navbar/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Texto/>
        <Slider/>
        <Contador/>
        <Espacio/>

        
        

        
        </ScrollView>
      </ImageBackground>
    )}};
  

 

const styles = StyleSheet.create({
  
  fondo:{
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    width: width,
    height: height,
    position: 'absolute'

  },
});
