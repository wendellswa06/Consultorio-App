import React from 'react';
import {Image, Platform, ScrollView, StyleSheet,Text,TouchableOpacity,View,ImageBackground} from 'react-native';
import { Dimensions } from "react-native";
import Colors from "../../../constants/colores";
import Texto from '../../../constants/Texto';
import colors from '../../../constants/colores';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//componentes
import Barra from '../historiaclinica-nuevo/barra'
import Input from '../historiaclinica-nuevo/input'
import Descripciones from '../historiaclinica-nuevo/descripciones'
import Genero from '../historiaclinica-nuevo/genero'
import Antecedentes from '../historiaclinica-nuevo/antecedentes'
import Fecha from '../historiaclinica-nuevo/fechanacimiento'
import Boton from '../historiaclinica-nuevo/Boton'
import Espaciocorto from '../historiaclinica-nuevo/espaciocorto'
import Espacioamplio from '../historiaclinica-nuevo/espacioamplio'
import { black } from 'ansi-colors';


export default class PerfilScreen extends React.Component {
  render() {
    return (

      <View style={styles.Contenedor_panel}>
      <Espaciocorto/>
      <Barra/>
      <Espacioamplio/>
      <Espacioamplio/>
      <Text style={styles.titulo}>Datos personales</Text>
      <Espaciocorto/>
      <Input 
       titulo='Nº Identificacion'
       input='Ej 109201202'
       tipo="number-pad"
       />
        <Espaciocorto/>
       <Espaciocorto/>
       <Input 
       titulo='Nombre'
       input='Ej Juan'
       tipo="default"
       />
      <Espaciocorto/>
      <Espaciocorto/>

       <Input
       titulo='Apellido'
       input='Ej Rojas'
       tipo="default"
       />
       <Espaciocorto/>
       <Espaciocorto/>
       <Input 
       titulo='Telefono'
       input='Ej 3008443534'
       tipo="number-pad"
       />
  
      <Espacioamplio/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Text style={styles.titulo}>Fecha Nacimiento</Text>
      



      <Espacioamplio/>
      <Espaciocorto/>
      <Espaciocorto/>

      <Text style={styles.titulo}>Genero</Text>
      <Espaciocorto/>
      <Genero/>
      <Espacioamplio/>
      <Espaciocorto/>
      <Espaciocorto/>

      <Text style={styles.titulo}>Antecedentes Medicos</Text>
      <Espacioamplio/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Tratamiento medico actual ?'
      />
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Toma de medicamentos ?'
      />
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Alergias ?'
      />
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Cardiopatias ?'
      />
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Cirugías (incluso oral) ?'
      />
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Antecedentes
      titulo='Enfermedades orales ?'
      />
      <Espacioamplio/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Text style={styles.titulo}>Motivo de Consulta</Text>
      <Espaciocorto/>
      <Descripciones
      input='Observaciones...'
      indice='100 palabras'
      />
      <Espacioamplio/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Espaciocorto/>
      <Boton
      titulo='Guardar'
      />


      
      </View>
    )}};


const styles = StyleSheet.create({
  
    Contenedor_panel: {
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    height: 1950,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width,
    //top: '17%',
    //marginTop: '10%',

    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    //paddingTop: '-50%',
    marginTop: '-5%',
    //marginLeft: '20%',
    //marginRight: '20%',
    shadowColor: 'black',
    shadowRadius: 6,
    shadowColor: Colors.sombrapanel, 
    shadowOpacity: 1.0, shadowRadius: 7,
     shadowOffset:{  width: 0,  height: 0, }

    },

    titulo: {
      marginHorizontal: '6%',
      fontSize: Texto.titulo,
      color: colors.colorprincipal,
      //top: '10%'

    }
});
