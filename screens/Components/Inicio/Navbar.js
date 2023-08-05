import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';
import { Actions } from 'react-native-router-flux'; 

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//imagenes
import Notificaciones_icon from '../../../assets/images/Notificationes.png'

export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

      <View style={styles.NavBar}>
      
      <View style={{ flexDirection:'column', justifyContent: 'space-evenly', width:'100%', paddingTop: '2%', }}>
      <Text style={{ width:'100%', textAlign:'left',fontSize: Texto.titulo,paddingLeft: '4%',shadowColor: colors.sombramenu, 
    shadowOpacity: 0.0, 
    shadowOffset:{  width: 0,  height: 0,  },
      letterSpacing: 0, alignItems: "center", color: colors.titulos}}>Hola!</Text>
      <Text style={{ width:'85%', textAlign:'left',fontSize: Texto.dra, paddingLeft: '4%', color: colors.titulos,
      letterSpacing: 1, top: '-8%'}}>Dra(a)      
      <Text style={{fontSize: Texto.nombre, marginLeft: '4%', color: colors.nombre}}> Sofia Vergara</Text></Text>
      </View>

      <View style={{ position:'absolute', width:'100%',  alignItems: 'flex-end', right: '4%', paddingTop: '3%'}}>
        <TouchableOpacity onPress={() => Actions.notificaciones()}>
            <Image source={Notificaciones_icon} style={{width: 30,height: 30,} }/>
        </TouchableOpacity>
        </View>
      </View>
     
    )}};
  

const styles = StyleSheet.create({
  
  NavBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    //backgroundColor: 'red',
    //top: '-1%',
    //borderBottomLeftRadius: 13,
    //borderBottomRightRadius: 13,
    borderColor: 'transparent',
    //borderWidth: 0.3,
    

    },

});
