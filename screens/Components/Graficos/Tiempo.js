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


export default class Tiempo extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
  <View style={styles.Grafica}> 
    
    <View style={styles.Texto}>
      <Text style={{textAlign:'left', fontSize: Texto.nombre,color: colors.principal, paddingTop:'15%'}}>Tiempo</Text>
    </View>

    <View style={styles.Texto2}>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.segundario,}}>Tiempo de uso de la app</Text>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.segundario, paddingLeft: '1%'}}>50</Text>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.nombre, paddingLeft: '1%'}}>Minnutos</Text>
    </View>

  </View>


     
    )}};
  

const styles = StyleSheet.create({
  
  Grafica: {

    flexDirection: 'column',
   // justifyContent: 'center',
    height: 100,
    //backgroundColor: 'blue',
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

      Texto2: {
        flexDirection: 'row',
        width: width,
        //backgroundColor: 'red',
        top: '-2%',
        paddingHorizontal: '3%'
    
        },
});
