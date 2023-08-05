import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground, TextInput} from 'react-native';
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
    <View style={styles.Contenedor_botones}>

        <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '5%', marginTop: '5%'}}> 
            <TextInput style={styles.textos} underlineColorAndroid='#00000' 
            placeholder={this.props.input}
            placeholderTextColor={Colors.holder}
            keyboardType={this.props.tipo}
                />
        </View>

          <Text style={{fontSize: Texto.Textosegundario,marginTop: '-2%', marginRight: '11%', marginBottom: '2%',color: Colors.colorsegundario, alignContent:'flex-end', alignSelf: 'flex-end'}}>{this.props.indice}</Text>
    </View>

    )}};
  

const styles = StyleSheet.create({
  Contenedor_botones: {
    //flex: 1,
    width: width,
    height: 200,
    //backgroundColor: "grey",
    //top: '15%',
    //marginTop: '3%',
    
  },

  textos:{
    //paddingHorizontal: 50,
    fontSize: 17,
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: '0%',
    paddingHorizontal: '3%',
    color: '#2B2B2B',
    borderColor: '#C3C3C3',
    borderRadius: 10,
    borderWidth: 1,
    //borderTopWidth: 0,
    //borderLeftWidth: 0,
    //borderRightWidth: 0,
    //backgroundColor: '#FFFFFF',
    width: '90%',
    height: '90%', 
    textAlign: 'left',
    textAlignVertical: 'top'
    
  },

});
