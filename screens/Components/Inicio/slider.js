import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Swipers from 'react-native-swiper';
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';


//imagenes
import foto1 from '../../../assets/images/fondo.jpeg'; 
import foto2 from '../../../assets/images/fondo2.jpeg'; 

//componentes
import colors from '../../../constants/colores';

export default class Swiper extends Component {
  render(){
    return (
      <View style={styles.Contenedor}>
      <Swipers style={{ justifyContent: 'center', 
   }} 
   
    dot={<View style={{backgroundColor: Colors.puntoinactivo, width: 12, height: 12,borderRadius: 7, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, top: 13,}} />}
    activeDot={<View style={{backgroundColor: Colors.puntoactivo, width: 12, height: 12, borderRadius: 7, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, top: 13,}} />}
    showsButtons={false}
    showsPagination={true}
    >
      
        
        <View style={styles.slider}>
          <View style={styles.fullscreen}>
            
          <Image source={foto1} style={{ width: '100%', height: '100%', borderRadius: 15}}/>
          </View>

          <View style={styles.sombra}>
          <Text style={{fontSize: Texto.titulo, color: '#fff', paddingLeft: '4%',top:'10%'}}>My agenda</Text>
          <Text style={{fontSize: Texto.segundario, color: '#fff', paddingLeft: '4%',top:'10%'}}>Citas Previas</Text>
          
          
          <View style={{position:'absolute', width:'100%',height:'100%',borderRadius: 15, justifyContent:'flex-end',paddingBottom:'30%'}}>
          <View style={{flexDirection: 'row',width: '55%', height: '14%',borderRadius: 15, borderColor: Colors.nombre, backgroundColor: 'transparent', left: '6%', alignItems: 'center', justifyContent: 'center', borderWidth: 1.4,}}>
          <Text style={{fontSize: Texto.segundario, color: colors.nombre}}>1</Text>
          <Text style={{fontSize: Texto.segundario, color: colors.nombre, paddingLeft: '3%'}}>Citas Pendientes</Text>
          </View>
          </View>


          </View>

        </View>

        <View style={styles.slider}>
          <View style={styles.fullscreen}>
            
          <Image source={foto2} style={{ width: '100%', height: '100%', borderRadius: 15}}/>
          </View>

          <View style={styles.sombra}>
          <Text style={{fontSize: Texto.titulo, color: '#fff',top:'30%', justifyContent: 'center', alignSelf: 'center'}}>Nueva Cita</Text>
          <Text style={{fontSize: Texto.segundario, color: '#fff',top:'30%', justifyContent: 'center', alignSelf: 'center'}}>Añadir cita previa</Text>

         
          </View>

        </View>


      </Swipers>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Contenedor: {
    height: 280  , 
    top: '-2%' , 
    backgroundColor: 'transparent'
  },

  fullscreen: {
    //backgroundColor: colors.sombratargeta, 
    height: '78%' , 
    width: '92%' , 
    borderRadius: 15
  },
  sombra: {
    position: 'absolute',
    height: '78%' , 
    width: '92%' , 
    borderRadius: 15,
    backgroundColor: Colors.Swiper,
    //justifyContent: 'center',
    //paddingTop: '-10%'
},
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-3%',
    //backgroundColor: 'transparent',
  },

  text: {
    color: '#fff',
    paddingLeft: '4%',
    fontSize: 50,
    fontWeight: 'bold',
  }
})

AppRegistry.registerComponent('myproject', () => Swiper);