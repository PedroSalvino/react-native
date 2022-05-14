import React from 'react';
import { StyleSheet, Text, TextInput, View, Switch, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default function Home() {
  const navigation = useNavigation();

  let state = {
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
 
  function goInfo(){
      navigation.navigate('Info', state);
  }

  function pegarNome(valor){
    state.nome = valor;
  }

  function pegarIdade(valor){
    state.idade = valor;
  }

  function pegarSexo(valor){
    state.sexo = valor;
  }

  function pegarEscolaridade(valor){
    state.escolaridade = valor;
  }

  let sexosItem = state.sexos.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome}></Picker.Item>
  });

  let escolaridadesItem = state.escolaridades.map((valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome}></Picker.Item>
  });

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} onChangeText={pegarNome}/>

      <Text style={styles.label}>Idade</Text>
      <TextInput style={styles.input} onChangeText={pegarIdade}/>

      <Text style={styles.label}>Sexo</Text>
      <Picker style={styles.input} selectedValue={state.sexo} onValueChange={ (itemValue, itemIndex) => pegarSexo(itemValue) }>
        {sexosItem}
      </Picker>
      
      <Text style={styles.label}>Escolaridade</Text>
      <Picker style={styles.input} selectedValue={state.escolaridade} onValueChange={ (itemValue, itemIndex) => pegarEscolaridade(itemValue) }>
        {escolaridadesItem}
      </Picker>

      <Text style={styles.label}>Limite</Text>
      <Slider
      thumbTintColor='purple'
      minimumValue={0}
      maximumValue={100}
      step={1}
      onValueChange={ (valorSelecionado) => state.limite = valorSelecionado}
      value={state.limite}

      />

      <Text style={styles.label}>Brasileiro(a)</Text>
      <Switch thumbColor='purple' value={state.brasileiro}
        onValueChange={ (valorSwitch) => state.brasileiro = valorSwitch}/>

      <Pressable style={styles.botao} onPress={goInfo}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </Pressable>
    </View>
  );
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