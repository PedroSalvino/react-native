import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tema: true,
      texto: true,
      temaDark: '',
      textoGrande: ''
    };

    this.mudarTema = this.mudarTema.bind(this);
    this.mudarTexto = this.mudarTexto.bind(this);
  }

  async componentDidMount(){
    // await AsyncStorage.getItem('temaDark').then((value) => {
    //   this.setState({temaDark: value});
    // })

    // await AsyncStorage.getItem('textoGrande').then((value) => {
    //   this.setState({textoGrande: value});   
    // })

    AsyncStorage.multiGet(['temaDark', 'textoGrande'], (err, items) => {
      this.setState({temaDark: items[0][1]});
      this.setState({textoGrande: items[1][1]});
    });
  }

  async componentDidUpdate(_, prevState){
    const temaDark = this.state.temaDark;
    const textoGrande = this.state.textoGrande;

    if(prevState[temaDark] !== temaDark){
      await AsyncStorage.setItem('temaDark', temaDark);
    }
    
    if(prevState[textoGrande] !== textoGrande){
       await AsyncStorage.setItem('textoGrande', textoGrande);
    }
  }
  
  mudarTema(valor){
    this.setState({
      tema : valor,
      temaDark: this.state.tema
    });
  }
  
  mudarTexto(valor){
    this.setState({
      texto: valor,
      textoGrande: this.state.texto
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Frases</Text>

        <View style={styles.row}>
          <Text>Dia</Text>
          <Switch thumbColor='blue' value={this.state.tema}
          onValueChange={(valorSwitch) => this.mudarTema(valorSwitch)}/>
                  
          <Text>Pequeno</Text>
          <Switch thumbColor='blue' value={this.state.texto}
          onValueChange={(valorSwitch) => this.mudarTexto(valorSwitch)}/>
        </View>
        
        <Text style={[styles.texto, this.state.textoGrande == 'true' || this.state.textoGrande == true ? styles.textoGrande : styles.textoPequeno, this.state.temaDark == 'true' || this.state.temaDark == true ? styles.temaEscuro : styles.temaClaro]}>
        “ 
          Eu quero ser definida pelas coisas que eu amo<br/>
          Não pelas coisas que odeio<br/>
          <br/>
          Não pelas coisas de que tenho medo<br/>
          Ou pelas coisas que me assombram no meio da noite ”<br/>
          ― Daylight, Taylor Swift
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15
  },
  titulo:{
    fontSize: 28,
    textAlign: 'center',
    padding: 2,
    color: '#1d3557',
    borderColor: '#1d3557',
    borderBottomWidth: 2,
    borderStyle:'solid'
  },
  texto:{
    fontWeight: '400',
    marginTop: 15,
    padding: 20,
    textAlign: 'right'
  },
  textoPequeno:{
    fontSize: 15
  },
  textoGrande:{
    fontSize: 30
  },
  temaClaro:{
    backgroundColor: '#bde0fe',
    color: '#1d3557'
  },
  temaEscuro:{
    backgroundColor: '#1d3557',
    color: '#f1faee'
  },
  row:{
    display: 'flex',
    alignItems: 'center',
  }
  
});
