import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

//Notificationes.png

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//Complementos
import Opciones from '../Odontograma/opciones';
import Espacio from './Espacio';


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={{flexDirection: 'row',width:'100%', paddingTop: '5%', height: 200 ,paddingLeft: '2%'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      
      <Opciones
      Imagen={require('../../../assets/images/historiaclinica.png')}
      name='Historia Clinica'
      color= '#003BDF'
      />

      <Opciones
      Imagen={require('../../../assets/images/historiaclinica.png')}
      name='Historia Clinica'
      color= '#003BDF'
      />
    
      <Espacio></Espacio>
      </ScrollView>  
      </View>
     
     
    )}};
  

const styles = StyleSheet.create({
  
  contenedor: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
    //elevation: 1,
    alignItems: 'flex-start',
    //justifyContent: '',
    width: width,
    backgroundColor: 'red',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius:13,
    //position: 'absolute'
    borderColor: Colors.bordernav,
    borderWidth: 0.3,

    },

});
