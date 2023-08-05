import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
 

export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (

    <TouchableHighlight onPress={this.props.Boton}>
    <Text style={styles.text}>{this.props.nombre}</Text>
    </TouchableHighlight>
        
);
}
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },


  body: 
  
  {
  
  flex: 1,

  },

  tabbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: 60,
    alignItems: 'center'
    

  },

  button: {
    width: 80,
    height: 26,
    backgroundColor: '#4D98EC',
    borderRadius: 2,
    margin: 10,
  },
  text:{
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    padding: 5,
  }
});
 
