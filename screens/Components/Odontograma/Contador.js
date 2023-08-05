import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import RF from "react-native-responsive-fontsize"
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';

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

      <View style={styles.Contador}>
      
      <View style={styles.contenido1}>
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.pacientesnumero,paddingLeft: '5%',
      letterSpacing: 0, alignItems: "flex-start", color: colors.nombre}}>10</Text>   
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.segundario,paddingLeft: '5%',
      letterSpacing: 0, alignItems: "flex-start", color: colors.terciarios}}>Ortodoncia</Text>   
      </View>
      <View style={styles.contenido2}>
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.pacientesnumero,paddingLeft: '1%',
      letterSpacing: 0, alignItems: "flex-start", color: colors.nombre}}>10</Text>   
      <Text style={{ width:'100%', textAlign:'center',fontSize: Texto.segundario,paddingLeft: '1%',
      letterSpacing: 0, alignItems: "flex-start", color: colors.terciarios}}>Periodoncia</Text>  
      </View>
      
      </View>

     
     
    )}};
  

const styles = StyleSheet.create({
  
  Contador: {
    flexDirection: 'row',
    height: 150,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    //backgroundColor: 'red',
    //top: '-3%'
    },

    contenido1: {
      flexDirection: 'column',
      //justifyContent: 'center',
      height: '80%',
      //elevation: 1,
      //alignItems: 'flex-start',
      justifyContent: 'center',
      width: '50%',
      //backgroundColor: 'blue',
      //borderBottomLeftRadius: 13,
      //borderBottomRightRadius:13,
      //position: 'absolute'
      borderColor: Colors.bordetratamiento,
      borderRightWidth: 0.7,
      //top: '-3%'
      },
      contenido2: {
        flexDirection: 'column',
        //justifyContent: 'center',
        height: '80%',
        //elevation: 1,
        //alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        //backgroundColor: 'green',
        //borderBottomLeftRadius: 13,
        //borderBottomRightRadius:13,
        //position: 'absolute'
        borderColor: Colors.bordetratamiento,
        borderLeftWidth: 0.7,
        //top: '-3%'
        },

});
