import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../../constants/Texto';
import PureChart from 'react-native-pure-chart';
import colors from '../../../constants/colores';


//Notificationes.png
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


//contantes
let sampleData = 
[
  {
    value: 7,
    label: 'Hombres',
    color: 'black',
  }, 
  {
    value: 4,
    label: 'Mujeres',
    color:  colors.nombre
  }, 
]


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
  <View style={styles.Grafica}> 
    
    <View style={styles.Texto}>
      <Text style={{textAlign:'left', fontSize: Texto.nombre,color: colors.principal}}>Generos</Text>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.segundario,}}>Masculino o femenino</Text>
    </View>
    
    <PureChart data={sampleData} type='pie' width={90} height={90} />

    </View>


     
    )}};
  

const styles = StyleSheet.create({
  
  Grafica: {
    //flexDirection: 'column',
    justifyContent: 'center',
    height: 340,
    backgroundColor: 'pink',
    //elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    //margin: '5%',
    top: '-5%'

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
