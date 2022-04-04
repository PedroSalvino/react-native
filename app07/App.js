import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: 0,
      sexos: [
        {nome : 'Feminino'},
        {nome : 'Masculino'},
        {nome : 'Outro'}
      ],
      escolaridade: 0,
      escolaridades: [
        {nome : 'Ensino Fundamental Incompleto'},
        {nome : 'Ensino Fundamental Completo'},
        {nome : 'Ensino Médio Incompleto'},
        {nome : 'Ensino Médio Completo'},
        {nome : 'Ensino Superior Incompleto'},
        {nome : 'Ensino Superior Completo'}
      ],
      limite: 0,
      brasileiro: false,
      status: false
    };

    this.pegarNome = this.pegarNome.bind(this);
    this.pegarIdade = this.pegarIdade.bind(this);
  
  };

  pegarNome(valor){
    this.setState(
      {nome: valor}
    )
  }
  pegarIdade(valor){
    this.setState(
      {idade: valor}
    )
  }

  render() {

    let sexosItem = this.state.sexos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome}></Picker.Item>
    });

    let escolaridadesItem = this.state.escolaridades.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome}></Picker.Item>
    });

    return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} onChangeText={this.pegarNome}/>

      <Text style={styles.label}>Idade</Text>
      <TextInput style={styles.input} onChangeText={this.pegarIdade}/>

      <Text style={styles.label}>Sexo</Text>
      <Picker style={styles.input} selectedValue={this.state.sexo} onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }>
        {sexosItem}
      </Picker>
      
      <Text style={styles.label}>Escolaridade</Text>
      <Picker style={styles.input} selectedValue={this.state.escolaridade} onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }>
        {escolaridadesItem}
      </Picker>

      <Text style={styles.label}>Limite</Text>
      <Slider
      thumbTintColor='purple'
      minimumValue={0}
      maximumValue={100}
      step={1}
      onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
      value={this.state.limite}

    />

    <Text style={styles.label}>Brasileiro(a)</Text>
    <Switch thumbColor='purple' value={this.state.brasileiro}
      onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}/>

    <Pressable style={styles.botao} onPress={()=> this.setState({status: true})}>
      <Text style={styles.textoBotao}>Confirmar</Text>
    </Pressable>

    <hr/>
    
    <Text>Dados Informados</Text>

    
    <Text style={styles.label}>Nome: {(this.state.status) ? this.state.nome : '############'}</Text>
    <Text style={styles.label}>Idade: {(this.state.status) ? this.state.idade : '##'}</Text>
    <Text style={styles.label}>Sexo: {(this.state.status) ? this.state.sexos[this.state.sexo].nome : '######'}</Text>
    <Text style={styles.label}>Escolaridade: {(this.state.status) ? this.state.escolaridades[this.state.escolaridade].nome : '##########'}</Text>
    <Text style={styles.label}>Limite: {(this.state.status) ? this.state.limite : '###'}</Text>
    <Text style={styles.label}>Brasileiro(a): {(this.state.status) ? ((this.state.brasileiro) ? "Sim" : "Não") : '###'}</Text>
    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 25,
    paddingHorizontal: 30
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 25,
    color: '#508AA8'
  },
  label:{
    fontWeight: 500,
    fontSize: 18,
    marginTop: 10,
    color: '#593C8F'
  },
  input:{
    borderWidth: 2,
    borderColor: '#593C8F',
    marginBottom: 10
  },
  botao:{
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginHorizontal: 'auto',
    backgroundColor: '#AFCBFF',
    borderRadius: 25
  },
  textoBotao: {
    fontSize: 15,
    fontWeight: 500
  }
});

