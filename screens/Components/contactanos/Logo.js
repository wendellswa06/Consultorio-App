import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import colors from '../../../constants/colores';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.Contenedor}>  
    
        </View>

    )}};

const styles = StyleSheet.create({
  
    Contenedor: {
        width:  '100%',
        height: 400,
        //position: 'absolute',
        backgroundColor: colors.fondoslider,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-50%',
        position: 'relative'
    },
});
