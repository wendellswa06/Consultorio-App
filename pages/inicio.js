import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
 
//componentes
import Botones from'./botones';

const inicio = () => {
  return (
    <View style={styles.container}>

      <Botones
      Boton= {() => Actions.reset('screenA')}
      nombre='Screen A'
      />

    </View>
  );
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center'
  },

});

export default inicio;