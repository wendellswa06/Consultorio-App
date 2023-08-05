import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
const ScreenB = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button}
        onPress={() => Actions.reset('screenA')}>
      <Text style={styles.text}>ir a inicio</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008AEF',
  },
  button: {
    width: 160,
    height: 26,
    backgroundColor: '#D33232',
    borderRadius: 2,
    margin: 10,
  },
  text:{
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  }
});
export default ScreenB;