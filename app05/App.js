import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Image} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      peso: 0,
      altura: 0,
      resultado: ''
    };

    this.pegarValorAltura = this.pegarValorAltura.bind(this);
    this.pegarValorPeso = this.pegarValorPeso.bind(this);
    this.verificarImc = this.verificarImc.bind(this);

  }

  pegarValorAltura(valor){
      this.setState({
        altura: valor
      });
  }
  pegarValorPeso(valor){
      this.setState({
        peso: valor
      });
  }

  verificarImc(){
    if(this.state.altura != '' && this.state.peso != ''){
      let calculo = this.state.peso / (this.state.altura ** 2);
      let res = "";
      if(calculo < 18.5){
        res = "Abaixo do peso";
      }
      else if(calculo >= 18.5 && calculo <= 24.9){
        res = "Peso Ideal";
      }
      else if(calculo >= 25 && calculo <= 29.9){
        res = "Sobrepeso";
      }
      else if(calculo >= 30 && calculo <= 34.9){
        res = "Obesidade Grau I";
      }
      else if(calculo >= 35 && calculo <= 39.9){
        res = "Obesidade grau II";
      }
      else if(calculo >= 40){
        res = "Obesidade Grau III";
      }
      else{
        res = "Inválido";
      }

      this.setState({
        resultado: res
      });
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calcular IMC</Text>
        <Image
            source={{ uri: 'https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-pink-electronic-scale-electronic-scale-for-measuring-weight-cartoon-illustration-hand-png-image_417072.jpg'}}
            style={styles.image}
          />
          <br/>
          <TextInput style={styles.input} placeholder='Informe sua Altura' onChangeText={this.pegarValorAltura}></TextInput>
          <TextInput style={styles.input} placeholder='Informe seu Peso' onChangeText={this.pegarValorPeso}></TextInput>

          <Pressable style={styles.botao} onPress={() => this.verificarImc()}>
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
    width: 300,
    height: 300
  },
  resultado:{
    color: '#EDDEA4'
  }
});

export default App;