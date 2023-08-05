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
    
      <Text style={{fontSize: Texto.dra, marginTop: '0%', marginLeft: '5%',color: Colors.colorprincipal, alignContent:'flex-start', alignSelf: 'flex-start'}}>{this.props.nombre}</Text>

    )}};

const styles = StyleSheet.create({



});
