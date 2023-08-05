import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



//constanstes cuadros dimenciones 
const  cuadro_ancho = 150
const  cuadro_alto = '90%'
const  text_cuadro_alto = '29%'
const  text_cuadro_ancho = '99%'



export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
          <View style={{marginLeft: 8, marginTop:'1%'}}>
          <View style={{width: cuadro_ancho, height: cuadro_alto, backgroundColor: colors.fondo, borderRadius: 17, borderColor: Colors.borde, opacity: 8.0, borderWidth: 0.8,shadowColor: Colors.sombramenu, 
          shadowOpacity: 1.0, shadowRadius: 7,
          shadowOffset:{  width: 0,  height: 0,  },}}>
              <TouchableOpacity >
              <View style={{height: '70%', width:'100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
              <Image  style={{width: 60, height: 60,}} source={this.props.Imagen}/>
              </View>
              <View style={{height: text_cuadro_alto , width:text_cuadro_ancho, borderRadius: 0, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderBottomRightRadius: 4, borderBottomLeftRadius: 4,}}>
              <Text style={{fontSize: Texto.boton, color: colors.colorcuadros}}>{this.props.name}</Text>
              </View>
              </TouchableOpacity>
          </View>
          </View>

    )}};
  