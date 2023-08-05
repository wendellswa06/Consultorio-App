import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swipers from 'react-native-swiper';
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';


//imagenes
import foto1 from '../../../assets/images/fondo3.jpeg'; 
import foto2 from '../../../assets/images/fondo4.jpeg'; 

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
    showsPagination={false}
    >
        
        
        <View style={styles.slider}>
          <View style={styles.fullscreen}>
            
          <Image source={foto1} style={{ width: '100%', height: '100%', borderRadius: 15}}/>
          </View>

          <View style={styles.sombra}>
          <Text style={{fontSize: Texto.titulo, color: '#fff', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', }}>Odontograma</Text>

          </View>

        </View>

        <View style={styles.slider}>
          <View style={styles.fullscreen}>
            
          <Image source={foto2} style={{ width: '100%', height: '100%', borderRadius: 15}}/>
          </View>

          <View style={styles.sombra}>
          <Text style={{fontSize: Texto.titulo, color: '#fff', justifyContent: 'center', alignSelf: 'center'}}>Periodoncia</Text>
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
    top: '-3%' , 
    //backgroundColor: 'blue'
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
    backgroundColor: Colors.perfil,
    justifyContent: 'center',
    //paddingTop: '-10%'
},
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-5%',
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