import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//constanstes cuadros dimenciones 
const  cuadro_ancho =5


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
          <View style={{marginLeft: 9}}>
          <View style={{width: cuadro_ancho}}>
            
            </View>
          </View>

    )}};
  