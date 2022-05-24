import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from './src/services/api';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      dados: '',
      loading: true
    }
    this.pegaUser = this.pegaUser.bind(this);
  }

  async componentDidMount() {
    if(this.state.user != ''){
      try{
        const user = this.state.user;
        const response = await api.get('/'+user);
  
        this.setState({
          dados: response.data,
          loading: false
        });
      }catch(e){
        console.error(e);
      }
    }
  }

  pegaUser(valor){
    this.setState({
      user: valor
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Perfil dos Devs</Text>  

        <View>
        <Image
          source={{ uri: this.state.dados ? ''+this.state.dados : 'https://picsum.photos/id/0/300/300' }}
          style={styles.image}
        />
        </View>
        
        <TextInput style={styles.input} placeholder='Digite o perfil do Github' onChangeText={this.pegaUser}/>

        <Pressable >
          <Text>
            <FontAwesome size={20} name='search'/>
            Buscar
          </Text>
        </Pressable>
        
        <View style={styles.containerList}>
          <Text style={styles.list}>
            <FontAwesome name='home' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Id: "+this.state.dados.id : " Id"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-marker' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Nome: "+this.state.dados.name : " Nome"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map-signs' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Repositórios: "+this.state.dados.public_repos : " Repositórios"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='map' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Criado em: "+this.state.dados.created_at : " Criado em"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='flag' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Seguidores: "+this.state.dados.followers : " Seguidores"}
          </Text>
          <Text style={styles.list}>
            <FontAwesome name='flag' size={20} color={'#fb643f'}/>
            {this.state.loading == false ? " Seguindo: "+this.state.dados.following : " Seguindo"}
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
  },
  image:{
    width: 30
  }
});

export default App;