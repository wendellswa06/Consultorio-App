import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
 
const ScreenA = () => {
  return (
    <View style={styles.container}>

      <TouchableHighlight
        style={styles.button}
        onPress={() => Actions.inicio()} >
      <Text style={styles.text}>inicio</Text>
      </TouchableHighlight>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33232',
  },
  button: {
    width: 160,
    height: 26,
    backgroundColor: '#4D98EC',
    borderRadius: 2,
    margin: 10,
  },
  text:{
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  }
});
 
export default ScreenA;