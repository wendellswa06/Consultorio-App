import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground, TextInput} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class PerfilScreen extends React.Component {
  render() {
    return (
     
      <TouchableOpacity style={styles.Contenedor_Principal} onPress={this.props.boton}>
            <View style={styles.Contenedor_Texto}>
                <Text style={{fontSize: Texto.Textoprimario, color: colors.titulos,marginTop: '0%', marginLeft: '0%',color: 'white', alignContent:'center', alignSelf: 'center'}}>{this.props.titulo}</Text>
            </View> 
      </TouchableOpacity>

    )}};
  

const styles = StyleSheet.create({

  Contenedor_Principal: {
    flexDirection: 'row',
    width: '90%', 
    height: 50, 
    //marginTop: '5%', 
    //borderColor: colors.btnborder, 
    //borderWidth: 0.6, 
    backgroundColor: colors.nombre, 
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
