import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Info({route}) {
  const navigation = useNavigation();
 
  function goHome(){
      navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações da Conta</Text>

      <Text style={styles.label}>Nome: {route.params?.nome}</Text>
      <Text style={styles.label}>Idade: {route.params?.idade}</Text>
      <Text style={styles.label}>Sexo: {route.params?.sexos[route.params?.sexo].nome}</Text>
      <Text style={styles.label}>Escolaridade: {route.params?.escolaridades[route.params?.escolaridade].nome}</Text>
      <Text style={styles.label}>Limite: {route.params?.limite}</Text>
      <Text style={styles.label}>Brasileiro(a): {(route.params?.brasileiro) ? "Sim" : "Não"}</Text>

      <Pressable style={styles.botao} onPress={goHome}>
        <Text style={styles.textoBotao}>Voltar</Text>
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