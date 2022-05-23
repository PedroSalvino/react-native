import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from './src/services/api';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cep: '',
      dados: '',
      loading: true
    }
    this.pegaCEP = this.pegaCEP.bind(this);
  }

  async componentDidUpdate() {
    if(this.state.cep.trim().length == 8){
      const cep = this.state.cep;
      const response = await api.get('/'+cep+'/json/');
      this.setState({
        dados: response.data,
        loading: false
      });
    }
  }

  pegaCEP(valor){
    this.setState({
      cep: valor
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>CEP x Endereço</Text>  
        
        <TextInput style={styles.input} placeholder='Informe o CEP' onChangeText={this.pegaCEP} maxLength={8}/>
        
        <View style={styles.containerList}>
          <Text style={styles.list}>
            <FontAwesome name='home' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " CEP: "+this.state.dados.cep : " CEP"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-marker' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Logradouro: "+this.state.dados.logradouro : " Logradouro"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-signs' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Bairro: "+this.state.dados.bairro : " Bairro"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Cidade: "+this.state.dados.localidade : " Cidade"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='flag' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Estado: "+this.state.dados.uf : " Estado"}
          </Text>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  titulo:{
    fontSize: 28,
    color: '#004b60',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#004b60'
  },
  input:{
    borderColor: '#1e6574',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 35
  },
  list:{
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  containerList:{
    borderWidth: 2,
    marginVertical: 15,
    borderRadius: 15,
    borderColor: '#fb643f'
  },
  botaoIcone:{
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 35
  }
});

export default App;