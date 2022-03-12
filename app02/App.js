import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas : 0
    };
    this.adicionar = this.adicionar.bind(this);
    this.subtrair = this.subtrair.bind(this);

  }

  adicionar(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
  }
  subtrair(){
    if(this.state.pessoas > 0){
      this.setState({
        pessoas: this.state.pessoas - 1
      });
    }
  }

  render(){
 
    return(
      <View style={styles.area}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        
        <Text style={styles.numero}>
          {this.state.pessoas}
        </Text>

        <Pressable style={[styles.botao,styles.botaoAdd]} onPress={() => this.adicionar()}>
          <Text style={styles.nomebotao}>Adicionar</Text>
        </Pressable>
        <Pressable style={[styles.botao,styles.botaoRemove]} onPress={() => this.subtrair()}>
          <Text style={styles.nomebotao}>Subtrair</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area:{
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
    padding: 60
  },
  botao:{
    margin: 'auto',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 80,
  },
  botaoAdd:{
    backgroundColor: '#345995'
  },
  botaoRemove:{
    backgroundColor: '#E40066'
  },
  nomebotao:{
    fontSize: 18,
    fontWeight: 600,
    color: '#eee'
  }

});


export default App;
