import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: 0
    };
    
    this.pegarValor1 = this.pegarValor1.bind(this);
    this.pegarValor2 = this.pegarValor2.bind(this);
    this.calcular = this.calcular.bind(this);
    
  }

  pegarValor1(valor){
    this.setState({
      numero1: valor
    })
  }
  pegarValor2(valor){
    this.setState({
      numero2: valor
    })
  }

  calcular(){
    if(this.state.numero1 != '' && this.state.numero2 != ''){
      this.setState({
        resultado: this.state.numero1 * this.state.numero2
      });
    }
  }

  render(){
 
    return(
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput style={styles.input} placeholder='Digite o 1º número' onChangeText={this.pegarValor1}></TextInput>

        <TextInput style={styles.input} placeholder='Digite o 2º número' onChangeText={this.pegarValor2}></TextInput>

        <Pressable style={[styles.botao,styles.botaoRemove]} onPress={() => this.calcular()}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>

        <Text style={styles.numero}>Resultado: {this.state.resultado}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area:{
    flex:1,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center'
  },
  titulo: {
    fontWeight: 600,
    color: '#454ADE',
    fontSize: 22,
    marginBottom: 15
  },
  numero:{
    fontSize: 45,
    borderStyle: 'dotted',
    borderColor: '#03CEA4',
    borderWidth: 3,
    margin: 'auto',
    padding: 20
  },
  botao:{
    margin: 'auto',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 80,
    backgroundColor: '#454ADE'
  },
  textoBotao:{
    color: '#eee'
  },
  input:{
    marginHorizontal: 'auto',
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#03CEA4',
    paddingHorizontal: 40,
    paddingVertical: 20
  }

});


export default App;
