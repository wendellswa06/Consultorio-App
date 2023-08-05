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


//contantes
let sampleData = [
    {x: '2018-01-01', y: 30},
    {x: '2018-01-02', y: 200},
    {x: '2018-01-03', y: 170},
    {x: '2018-01-04', y: 250},
    {x: '2018-01-05', y: 10},
    {x: '2018-01-05', y: 10},
    {x: '2018-01-05', y: 10},
    {x: '2018-01-05', y: 10},
]


export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
   
  <View style={styles.Grafica}> 
    <View style={styles.Texto}>
      <Text style={{textAlign:'left', fontSize: Texto.nombre,color: colors.principal}}>Pacientes</Text>
      <Text style={{textAlign:'left', fontSize: Texto.segundario,color: colors.segundario,}}>Pacientes nuevos por mes</Text>
    </View>
    
    <PureChart data={sampleData} width={100}
    height={200} type='line' backgroundColor='rgba(255, 255, 255, 0.5)' 
    highlightColor="yellow"
    primaryColor="#0B8FFF"
    numberOfYAxisGuideLine={5}
    />
  

   </View>


     
    )}};
  

const styles = StyleSheet.create({
  
  Grafica: {
    //flexDirection: 'column',
    justifyContent: 'center',
    height: 350,
    //elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    //backgroundColor: 'blue',
    top: '-5%',
    paddingLeft: '7%',
    paddingRight: '7%',

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
