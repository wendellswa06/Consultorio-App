import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import foto from '../../../assets/images/foto2.jpg'; 
import { blue, red } from 'ansi-colors';

const borde = 40


export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

        <View style={styles.Contenedor}>
            
            <View style={styles.FullScreem}>
            <Image source={foto} style={{ width: '100%', height: '100%'}}/>    
            </View>

            <View style={styles.sombra}>
                <Text style={{fontSize: Texto.titulo, color: Colors.blanco, textAlign:'center', }}>Sofia Vergara</Text>
                <Text style={{fontSize: Texto.nombre, color: Colors.nombre, textAlign:'center',}}>Odontologa</Text>
            </View>

        
        </View>


    )}};


const styles = StyleSheet.create({
  
    Contenedor: {

        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        width:  '100%',
        height: 260,
        //position: 'absolute',
        backgroundColor: 'grey',
        //marginTop: '-5%',
    },

    FullScreem: {
        //flex: 1,    
        height: '100%', 
        width: '100%', 
        //justifyContent: 'center',
       
        //alignItems: 'baseline', 
        //backgroundColor: 'blue'
        //position: 'absolute'
    },

    sombra: {
        position: 'absolute',
        height: '100%', 
        width: '100%',  
        backgroundColor: Colors.perfil,
        justifyContent: 'center',
        //paddingTop: '-10%'
    },



});
