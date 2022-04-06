import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor: 0,
      de: 0,
      para: 0,
      moedas: [
        {nome : 'Dólar'},
        {nome : 'Euro'},
        {nome : 'Real'}
      ],
      resultado: 0
    };

    this.pegarValor = this.pegarValor.bind(this);
    this.converterMoedas = this.converterMoedas.bind(this);
  };

  pegarValor(valor){
    this.setState({
      valor: valor
    });
  }

  converterMoedas(){
    let de = this.state.de;
    let para = this.state.para;
    let valor = this.state.valor;
    let simbolo = '';
    let resultado = 0;

    if(para == 0){
      simbolo = '$';
    }
    else if(para == 1){
      simbolo = '€';
    }
    else if(para == 2){
      simbolo = 'R$'
    }

    if(de == para){
      resultado = valor;
    }
    else if(de == 0 && para == 1){
      resultado = valor * 0.92;
    }
    else if(de == 0 && para == 2){
      resultado = valor * 4.65;
    }
    else if(de == 1 && para == 0){
      resultado = valor * 1.09;
    }
    else if(de == 1 && para == 2){
      resultado = valor * 5.07;
    }
    else if(de == 2 && para == 0){
      resultado = valor * 0.21;
    }
    else if(de == 2 && para == 1){
      resultado = valor * 0.20;
    }

    this.setState({
      resultado: simbolo+' '+resultado
    });
  }

  render() {

    let moedasItem = this.state.moedas.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome}></Picker.Item>
    });

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Conversor de Moedas<br/>Dólar / Euro / Real</Text>

        <Text style={styles.label}>Valor</Text>
        <TextInput style={styles.input} placeholder='Digite um valor' onChangeText={this.pegarValor}></TextInput>

        <Text style={styles.label}>De</Text>
        <Picker style={styles.input} selectedValue={this.state.de} onValueChange={ (itemValue, itemIndex) => this.setState({de: itemValue}) }>
          {moedasItem}
        </Picker>

        <Text style={styles.label}>Para</Text>
        <Picker style={styles.input} selectedValue={this.state.para} onValueChange={ (itemValue, itemIndex) => this.setState({para: itemValue}) }>
          {moedasItem}
        </Picker>

        <Pressable onPress={() => this.converterMoedas()} style={styles.botao}>
          <Text style={styles.textoBotao}>Converter</Text>
        </Pressable>

        <Text style={[styles.label,styles.resultado]}>Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30
  },
  titulo:{
    color: '#0cd15b',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 600,
    borderBottomColor: '#0cd15b',
    borderBottomWidth: 2
  },
  input:{
    borderWidth: 2,
    borderColor: '#0466c8',
    marginBottom: 10,
    padding: 5
  },
  botao:{
    backgroundColor: '#0cd15b',
    marginHorizontal: 'auto',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  textoBotao:{
    color: '#eee'
  },
  label:{
    fontWeight: 500,
    fontSize: 18,
    marginTop: 10,
    color: '#0466c8'
  },
  resultado:{
    textAlign: 'center'
  }
});
