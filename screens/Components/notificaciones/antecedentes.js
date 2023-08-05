import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground, TextInput} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../../constants/Texto';
import Colors from "../../../constants/colores";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var radio_props = [
  {label: 'No', value: 0 },
  {label: 'Si', value: 1 },
];

export default class PerfilScreen extends React.Component {
  render() {
    return (
        <View style={styles.Contenedor_botones}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '7%', marginTop: '0%'}}> 
          <Text style={{fontSize: Texto.Preguntas,marginTop: '-5%', marginLeft: '0%', marginBottom: '4%',color: Colors.colorsegundario, alignContent:'flex-start', alignSelf: 'flex-start'}}>{this.props.titulo}</Text>
            <RadioForm
              formHorizontal={true}
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {this.setState({value:value})}}
              buttonSize={16}
              buttonStyle={{marginLeft: 40, paddingLeft: 30,}}
              buttonWrapStyle={{marginLeft: 60}}
            />

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
