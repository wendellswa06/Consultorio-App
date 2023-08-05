import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux'; 
import Colors from "../../../constants/colores";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//componentes
import Titulo from './Titulo'
import Barra from './barra'
import Botones from '../historiaclinica/botones'
import Espaciocorto from './espaciocorto'
import Espacioamplio from './espacioamplio'
import Comentario from './comentario'

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.Contenedor_panel}>
      
      <Espaciocorto/>
      <Barra/>

      <Espaciocorto/>
      <Espacioamplio/>  

      <Titulo
      nombre= 'Opciones'
      />
      <Espacioamplio/>   
      <Espaciocorto/>

      <Botones 
       titulo='Nuevo'
       subtitulo='Historia Clinica'
       imagen={require('../../../assets/images/controles.png')}
       boton= {() => Actions.Historiaclinicanuevo()}
       />
      
       <Espaciocorto/>
       <Botones 
       titulo='Ver'
       subtitulo='Historia Clinica'
       imagen={require('../../../assets/images/controles.png')}
       boton= {() => Actions.Historiaclinicanuevo()}
       />

       <Espaciocorto/>
       <Botones 
       titulo='Codigo QR'
       subtitulo='Historia Clinica'
       imagen={require('../../../assets/images/controles.png')}
       boton= {() => Actions.Historiaclinicanuevo()}
       />

      <Espacioamplio/>
      <Espacioamplio/>
    
      <Comentario
      nombre= 'Realiza búsquedas y guardas nuevos a tu  registro a tus historias clínicas.'
      />


      </View>
    )}};


const styles = StyleSheet.create({
  
    Contenedor_panel: {
 //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    height: 600,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width,
    //top: '17%',
    //marginTop: '10%',

    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    //paddingTop: '-50%',
    marginTop: '-5%',
    //marginLeft: '20%',
    //marginRight: '20%',
    shadowColor: Colors.sombrapanel, 
    shadowOpacity: 1.0, shadowRadius: 7,
     shadowOffset:{  width: 0,  height: 0, }

    },
});
