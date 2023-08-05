import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Image} from 'react-native';
import Colors from '../constants/colores';
import Texto from '../constants/Texto';


//Iconos
import Inicio from '../assets/images/Inicio.png'
import Odontograma from '../assets/images/Odontograma.png'
import Graficas from '../assets/images/Graficos.png'
import Perfil from '../assets/images/Perfil.png'
import Publicar from '../assets/images/publicar.png'


//Screem
import InicioScreen from '../screens/InicioScreen';
import OdontogramaScreen from '../screens/OdontogramaScreen';
import PublicarScreen from '../screens/Publicaciones';
import GraficosScreen from '../screens/GraficosScreen';
import PerfilScreen from '../screens/PerfilScreen';
import menu from '../screens/Historiaclinica';



const InicioStack = createStackNavigator({
  inicio:{screen: InicioScreen},
  menu:{screen: menu},
  

});

InicioStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarHidden: true,
  tabBarIcon: <Image style={{width: Texto.menu, height: Texto.menu, tintColor:'#000000'}} source={Inicio}/>,
  tabBarOptions: { 
    animationEnabled: true,
    showLabel: true,
    activeTintColor: Colors.tabbaractivo,
    inactiveTintColor: Colors.tabbarinactivo,
    style:{
      backgroundColor: 'transparent',
      borderColor: Colors.bordernav,
      borderTopWidth: 0,

  },
  
},
  
};

const OdontogramaStack = createStackNavigator({
  Odontograma: {screen: OdontogramaScreen},
});

OdontogramaStack.navigationOptions = {
  tabBarLabel: 'Odontograma',
  tabBarIcon: <Image style={{width: Texto.menu, height: Texto.menu}} source={Odontograma}/>,
  tabBarOptions: { 
    activeTintColor: Colors.tabbaractivo,
    inactiveTintColor: Colors.tabbarinactivo,
    style:{
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      borderColor: Colors.bordernav,
  },

},
  
};

const PublicarStack = createStackNavigator({
  publicar:{screen: PublicarScreen},
});

PublicarStack.navigationOptions = {
  tabBarLabel: 'publicar',
  tabBarIcon: <Image style={{width: Texto.menu, height: Texto.menu}} source={Publicar}/>,
  tabBarOptions: { 
    activeTintColor: Colors.tabbaractivo,
    inactiveTintColor: Colors.tabbarinactivo,
    style:{
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      borderColor: Colors.bordernav,
  },

},
  
};

const GraficosStack = createStackNavigator({
  Graficos: {screen: GraficosScreen},
});

GraficosStack.navigationOptions = {
  tabBarLabel: 'Graficas',  
  tabBarIcon: <Image style={{width: Texto.menu, height: Texto.menu}} source={Graficas}/>,
  tabBarOptions: { 
    activeTintColor: Colors.tabbaractivo,
    inactiveTintColor: Colors.tabbarinactivo,
    style:{
      backgroundColor: 'transparent',
      borderColor: Colors.bordernav,
      borderTopWidth: 0,
  },

},
  
};

const PerfilStack = createStackNavigator({
  Perfil: {screen: PerfilScreen},
});

PerfilStack.navigationOptions = {
  tabBarLabel: 'Perfil',  
  tabBarIcon: <Image style={{width: Texto.menu, height: Texto.menu}} source={Perfil}/>,
  tabBarOptions: { 
    activeTintColor: Colors.tabbaractivo,
    inactiveTintColor: Colors.tabbarinactivo,
    style:{
      backgroundColor: 'transparent',
      borderColor: Colors.bordernav,
      borderTopWidth: 0,
  },

},
};



//app
const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    inicio: { screen: InicioStack },
    Odontograma: { screen: OdontogramaStack },
    publicar: { screen: PublicarStack },
    graficos: { screen: GraficosStack },
    perfil: { screen: PerfilStack },
  },
  );



export default createAppContainer(App);

