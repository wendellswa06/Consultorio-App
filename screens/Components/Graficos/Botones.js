import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import PureChart from 'react-native-pure-chart';
import colors from '../../../constants/colores';


//Notificationes.png
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


//constanstes cuadros dimenciones 
const  cuadro_ancho = 140
const  cuadro_alto = 150


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10, top: '-15%'}}>
      <View style={{width: cuadro_ancho, height: cuadro_alto, backgroundColor: Colors.cuadrografica, borderRadius: 5, borderColor: Colors.bordergrafica, opacity: 1.0, borderWidth: 0.8, justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity >
          
          <Text style={{fontSize: Texto.pacientesnumero, color: Colors.nombre, textAlign: 'center'}}>{this.props.numero1}</Text>
    
         
          <Text style={{fontSize: Texto.boton, textAlign: 'center'}}>{this.props.nombre1}</Text>
        
          
          <Text style={{fontSize: Texto.boton, textAlign: 'center'}}>{this.props.rango1}</Text>
      
          </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 10,width: cuadro_ancho, height: cuadro_alto, backgroundColor: Colors.cuadrografica, borderRadius: 5, borderColor: Colors.bordergrafica, opacity: 1.0, borderWidth: 0.8, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity >
          
          <Text style={{fontSize: Texto.pacientesnumero, color: Colors.nombre, textAlign: 'center'}}>{this.props.numero2}</Text>
    
         
          <Text style={{fontSize: Texto.boton, textAlign: 'center'}}>{this.props.nombre2}</Text>
        
          
          <Text style={{fontSize: Texto.boton, textAlign: 'center'}}>{this.props.rango2}</Text>
      
          </TouchableOpacity>
      </View>
      </View>

     
    )}};
