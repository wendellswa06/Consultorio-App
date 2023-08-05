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


//Componentes
import Botones from './Botones' 


export default class Edad extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
  <View style={styles.Grafica}> 
  
   <View style={styles.Texto}>
      <Text style={{textAlign:'left', fontSize: Texto.nombre,color: colors.principal, paddingTop:'15%'}}>Edad</Text>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.segundario,}}>Categorias por edades</Text>
    </View>
    
    <View style={{flexDirection: 'column', height: '100%', width: '100%', justifyContent: 'center',}}>
      
      <Botones
      numero1= '3'
      nombre1= 'niños'
      rango1= '10-15'

      numero2= '4'
      nombre2= 'Adolecentes'
      rango2= '15-21'
      />
     
      
      <Botones
      numero1= '10'
      nombre1= 'Jovenes'
      rango1= '21-25'

      numero2= '2'
      nombre2= 'Adultos'
      rango2= '25-50+' 
      />


      </View>


    </View>


     
    )}};
  

const styles = StyleSheet.create({
  
  Grafica: {
    //flex: 1,
    flexDirection: 'column',
   // justifyContent: 'center',
    height: 450,
    //backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: width,
    top: '-5%',

    },
    Texto: {
      //flexDirection: 'column',
      justifyContent: 'center',
      //elevation: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: width,
      //backgroundColor: 'red',
      top: '-5%',
      paddingHorizontal: '3%'
  
      },
});
