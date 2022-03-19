import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Image} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      resultado: ''
    };

    this.pegarValorAltura = this.pegarValorAltura.bind(this);
    this.verficarPalpite = this.verficarPalpite.bind(this);
  }

  pegarValorAltura(valor){
      this.setState({
        numero: valor
      });
  }

  verficarPalpite(){
    if(this.state.numero != ''){
      let random = Math.floor(Math.random()*10);
      let res = "";
      if(random == this.state.numero){
        res = "Acertou!";
      }
      else if(random != this.state.numero){
        res = "Errou! O correto é "+random;
      }
      else{
        res = "Resultado inválido";
      }

      this.setState({
        resultado: res
      })
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo do Nº Aletório</Text>
        <Image
            source={{ uri: 'https://66.media.tumblr.com/0caee7e4146a8a74e6a740d656ecb85d/tumblr_mnakva6Dds1rfjowdo1_500.gif'}}
            style={styles.image}
          />
          <br/>
          <TextInput style={styles.input} placeholder='Informe um número de 0 a 10' onChangeText={this.pegarValorAltura}></TextInput>
          
          <Pressable style={styles.botao} onPress={() => this.verficarPalpite()}>
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