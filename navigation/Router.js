import React, { Component, View, Image,Text } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/colores';

//vistas principales
import inicio from '../screens/InicioScreen';
import tratamientos from '../screens/OdontogramaScreen';
import Publicaciones from '../screens/publicaciones';
import Graficas from '../screens/GraficosScreen';
import Perfil from '../screens/PerfilScreen';

//vistas segundarias inicio
import notificaciones from '../screens/notificaciones';
import agenda from '../screens/notificaciones';
import periodoncia from '../screens/periodoncia';
import Historiaclinica from '../screens/Historiaclinica';
import Pacientes from '../screens/PacientesScreen';
import Controles from '../screens/ControlesScreen';
import Extraciones from '../screens/ExtracionesScreen';
import Historiaclinicanuevo from '../screens/Historiaclinica-nuevo';
import Historiaclinicaver from '../screens/Historiaclinica-ver';

//vistas segundarias perfil
import datospersonales from '../screens/datospersonales';
import seguridad from '../screens/seguridad';
import contactanos from '../screens/contactanos';
import version from '../screens/version';


//constantes 
const IconTratamiento = () => (
  <Icon color='#000000' name='ios-menu' size={29} />
)

const App = () => {
  return (
    <Router >
    <Scene key="menu"
    tabs
    showIcon={true}
    showLabel={true}
    hideNavBar
    tabBarStyle={{
      borderTopColor: 'white',
    }}
    tabStyle={{
      width: '100%',
      height: '100%',
      borderTopColor: 'white',
      //borderTopWidth: 4,
      //marginTop: -1,
      paddingTop: 10
    }}
    >

    <Scene key="inicio"  title='inicio' icon={IconTratamiento} >
    <Scene
      key="inicio"
      component={inicio}
      type='reset'
      hideNavBar
      initial
      
      
    />
    <Scene
      key="notificaciones"
      component={notificaciones}
      title='notificaciones'
      hideTabBar
     
    />
      <Scene
      key="agenda"
      component={agenda}
      title='agenda'
      hideTabBar
     
    />

    <Scene
      key="Historiaclinica"
      component={Historiaclinica}
      title='Historia Clinica'
      hideTabBar
      
     
    />
     <Scene
      key="Historiaclinicanuevo"
      component={Historiaclinicanuevo}
      hideTabBar
      
      
    />
    <Scene
      key="Historiaclinicaver"
      component={Historiaclinicaver}
      hideTabBar
      
      
    />
     <Scene
      key="Pacientes"
      component={Pacientes}
      hideTabBar
    />
    <Scene
      key="Controles"
      component={Controles}
      hideTabBar
    />
     <Scene
      key="Extraciones"
      component={Extraciones}
      hideTabBar
    />
     <Scene
      key="Extraciones"
      component={Extraciones}
      hideTabBar
    />
    </Scene>

    <Scene key="Tratamientos" icon={IconTratamiento}>
    <Scene
      key="tratamiendo"
      title='tratamiento'
      component={tratamientos}
      hideNavBar
      initial
    />

    <Scene
      key="periodoncia"
      component={periodoncia}
      title='periodoncia'
      hideTabBar
     
    />
    </Scene>

    <Scene key="Publicar" icon={IconTratamiento}>
    <Scene
      key="Publicaciones"
      component={Publicaciones}
      hideNavBar
      initial
    />
    </Scene>

    <Scene key="Grafica" icon={IconTratamiento}>
    <Scene
      key="Graficas"
      title='Graficas'
      component={Graficas}
      hideNavBar
      initial
    />
    </Scene>

    <Scene key="Perfil" icon={IconTratamiento}>
    <Scene
      key="Perfil"
      title='Perfil'
      component={Perfil}
      hideNavBar
      initial
    />
    <Scene
      key="datospersonales"
      title='datos personales'
      component={datospersonales}
      hideTabBar
      hideNavBar
    />
    <Scene
      key="seguridad"
      title='seguridad'
      component={seguridad}
      hideTabBar
      hideNavBar
    />
    <Scene
      key="contactanos"
      title='contactanos'
      component={contactanos}
      hideTabBar
      hideNavBar
    />
    <Scene
      key="version"
      title='version'
      component={version}
      hideTabBar
      hideNavBar
    />
    </Scene>

    </Scene>
    </Router>
  );
}
 
export default App;