import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import logo from '../../../assets/images/historiaclinica.png'; 
import colors from '../../../constants/colores';

const borde = 40


export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.Contenedor}>  
        <Image source={logo} style={{ width: Texto.Iconlogo, height: Texto.Iconlogo, marginTop: '10%', marginBottom: '15%',}}/> 
        </View>

    )}};

const styles = StyleSheet.create({
  
    Contenedor: {
        width:  '100%',
        height: 250,
        //position: 'relative',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '-40%',
        //position: 'relative'
        marginBottom: '10%'
    },



});
