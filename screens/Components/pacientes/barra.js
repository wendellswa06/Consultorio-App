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
    
      <View style={styles.Contenedor_barra}>
     </View>
    )}};

const styles = StyleSheet.create({

  Contenedor_barra: {
    width: '50%', 
    height: 4, 
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.colorbarra,
    borderRadius: 30,
    marginTop: '-1%'
    
}
});
