import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Image} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      alcool: 0,
      gasolina: 0,
      resultado: ''
    };

    this.pegarValorAlc = this.pegarValorAlc.bind(this);
    this.pegarValorGas = this.pegarValorGas.bind(this);
    this.verificarCombustivel = this.verificarCombustivel.bind(this);

  }

  pegarValorAlc(valor){
      this.setState({
        alcool: valor
      });
  }
  pegarValorGas(valor){
      this.setState({
        gasolina: valor
      });
  }

  verificarCombustivel(){
    console.log(this.state.alcool);
    console.log(this.state.gasolina);
    if(this.state.alcool != '' && this.state.gasolina != ''){

      if((this.state.alcool/this.state.gasolina) >= 0.7){
        this.setState({
          resultado: 'Gasolina'
        });
      }else if((this.state.alcool/this.state.gasolina) < 0.7){
        this.setState({
          resultado: 'Álcool'
        });
      }
      else{
        this.setState({
          resultado: 'Inválido'
        });
      }
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Álcool ou Gasolina?</Text>
        <Image
            source={{ uri: 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
            style={styles.image}
          />
          <br/>
          <TextInput style={styles.input} placeholder='Preço do Álcool' onChangeText={this.pegarValorAlc}></TextInput>
          <TextInput style={styles.input} placeholder='Preço da Gasolina' onChangeText={this.pegarValorGas}></TextInput>

          <Pressable style={styles.botao} onPress={() => this.verificarCombustivel()}>
            <Text style={styles.textoBotao}>Verificar</Text>
          </Pressable>

          <Text style={styles.titulo}>Resultado: {this.state.resultado}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#392759',
    borderRadius: 15,
    marginTop: 25
  },
  textoBotao:{
    color: '#eee',
    fontSize: 18,
    fontWeight: 600
  },
  input:{
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderColor: '#6874E8',
    borderWidth: 2,
    marginVertical: 10
  },
  titulo: {
    fontSize: 30,
    color: '#392759',
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 500
  },
  image: {
    width: 400,
    height: 200
  },
  resultado:{
    color: '#EDDEA4'
  }
});

export default App;