import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground, TextInput} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../../constants/Texto';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class PerfilScreen extends React.Component {
  render() {
    return (
    
        <View style={styles.Contenedor_botones}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '5%', marginTop: '0%'}}> 
   
   

          </View>
        </View>

    )}};
  

const styles = StyleSheet.create({
  Contenedor_botones: {
    //flex: 1,
    width: width,
    height: 50,
    //backgroundColor: "grey",
    //top: '15%',
    marginTop: '2%',
    
  },

  textos:{
    //paddingHorizontal: 50,
    fontSize: 17,
    left: '1%',
    paddingHorizontal: '3%',
    color: '#2C2C2C',
    borderColor: '#484848',
    borderRadius: 20,
    borderWidth: 1,
    //backgroundColor: '#FFFFFF',
    width: '90%',
    height: Texto.btninput, 
    
  },

});
