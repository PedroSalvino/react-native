import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

export default function App() {
  
  const [userValue, setUserValue] = useState('');
  const [data, setData] = useState(false);
  
  async function buscarUser() {
    try{
      const response = await axios.get(`https://api.github.com/users/${userValue}`);
      
      if(response){
        setData(response.data);
      }
      
    }catch(e){
      console.error(e);
      setData(false);
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil dos Devs</Text>  

      <View>
      {
      data.length !=0 && data ? (<Image
        source={{ uri: data.avatar_url}}
        style={styles.image}
      />) : (<Text></Text>)
      }
      </View>
      
      <TextInput style={styles.input} placeholder='Digite o perfil do Github' value={userValue} onChangeText={value => setUserValue(value)}/>

      <Pressable onPress={buscarUser} style={styles.botao}>
        <Text style={styles.textoBotao}>
          <FontAwesome size={20} name='search' style={styles.iconeBotao}/>
          Buscar
        </Text>
      </Pressable>
      
      {data ? (
        <View style={styles.containerList}>
          <Text style={styles.list}>
            <FontAwesome name='home' size={20} color={'#fb643f'}/>
            {" Id: "+data.id}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-marker' size={20} color={'#fb643f'}/>
            {" Nome: "+data.name}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-signs' size={20} color={'#fb643f'}/>
            {" Repositórios: "+data.public_repos}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map' size={20} color={'#fb643f'}/>
            {" Criado em: "+data.created_at}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='flag' size={20} color={'#fb643f'}/>
            {" Seguidores: "+data.followers}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='flag' size={20} color={'#fb643f'}/>
            {" Seguindo: "+data.following}
          </Text>
        </View>

      ) : (
        <View>
          <Text style={{textAlign: 'center', marginVertical: 15, fontSize: 20}}>Usuário não encontrado!</Text>
        </View>
      )}

      
    </View>
  );
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
  },
  image:{
    width: 300,
    height: 300,
    marginHorizontal: 'auto',
    marginVertical: 10,
    borderColor: '#004b60',
    borderWidth: 2
  },
  botao:{
    paddingVertical: 10,
    backgroundColor: '#e34a6f',
    borderRadius: 35,
  },
  textoBotao:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  iconeBotao:{
    marginRight: 5
  }
});