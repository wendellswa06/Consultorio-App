import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import datos from '../../../assets/images/Perfil.png'; 

const margin = 25
const tamaño = 29

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  
  render() {
    return (
     
        <View style={styles.Contenedor_botones}>
          <TouchableOpacity  onPress={this.props.boton}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '5%', paddingTop: '-5%'}}> 
            <Image style={{width: tamaño, height: tamaño}} source={this.props.Imagen}></Image>
            <Text style={{fontSize: Texto.opciones, marginLeft: '3%',color: Colors.principal, alignContent:'center', alignSelf: 'center'}}>{this.props.name}</Text>
          </View>
          </TouchableOpacity>
        </View>
          

    )}};
  

const styles = StyleSheet.create({
  

  Contenedor_botones: {
    //flex: 1,
    width: width,
    height: 50,
    //backgroundColor: "grey",
    top: '15%',
    marginTop: '3%',
    
  }
});
