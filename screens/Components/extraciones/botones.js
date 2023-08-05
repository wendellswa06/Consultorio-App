import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (  
      <TouchableOpacity style={styles.Contenedor_Principal} onPress={this.props.boton}>
            <View style={styles.Contenedor_Logo}>
               <Image  style={{width: 55, height: 55,}} source={this.props.imagen}/>
              </View>
            <View style={styles.Contenedor_Texto}>
                <Text style={{fontSize: Texto.Textoprimario,marginTop: '0%', marginLeft: '1%',color: Colors.colorprincipal, alignContent:'flex-start', alignSelf: 'flex-start'}}>{this.props.titulo}</Text>
                <Text style={{fontSize: Texto.Textosegundario,marginTop: '0%',  marginLeft: '1%',color: Colors.colorsegundario, alignContent:'flex-start', alignSelf: 'flex-start'}}>{this.props.subtitulo}</Text>
            </View> 
      </TouchableOpacity>

)}};

const styles = StyleSheet.create({

  Contenedor_Principal: {
      flexDirection: 'row',
      width: '90%', 
      height: 70, 
      //marginTop: '5%', 
      borderColor: colors.btnborder, 
      borderWidth: 0.6, 
      //backgroundColor: colors.nombre, 
      alignItems: 'center', 
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 10,
  },

  Contenedor_Texto: {
      width: '70%', 
      height: '100%', 
      //marginLeft: '7%',
      //marginTop: '-2%', 
      justifyContent: 'center', 
      //alignItems: 'center',
      //backgroundColor: 'yellow',
      //borderRadius: 10,
  },

  Contenedor_Logo: {
    width: '30%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    //backgroundColor: 'black',
    //marginLeft: '5%'
    //borderRadius: 10,
    
}
});
