import React from 'react';
import {Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
     <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/52542914?v=4'}}
          style={{ width: 300, height: 300}}
        />

      <hr></hr>
      <Text style={{fontWeight: 800, fontSize:18, marginTop: 5}}>Dados Pessoais</Text>
      <Text>Pedro Luiz Souza Salvino<br/>
        21 anos<br/>Santos, SP</Text>

      <hr></hr>
      <Text style={{fontWeight: 800, fontSize:18, marginTop: 5}}>Formação Acadêmica</Text>
      <Text>Tecnólogo em Sistemas para Internet na FATEC Rubens Lara<br/>
      Técnico em Desenvolvimento de Sistemas na ETEC Dra. Ruth Cardoso<br/>
      Técnico em Informática na ETEC Dra. Ruth Cardoso</Text>

      <hr></hr>
      <Text style={{fontWeight: 800, fontSize:18, marginTop: 5}}>Experiência</Text>
      <Text>Estagiário FullStack na Santos Port Authority<br/>
      Monitor de Algoritmos e Lógica de Programação na FATEC Rubens Lara<br/>
      Estagiário de Comunicação na FATEC Rubens Lara</Text>
      




    </View>
  );
}
