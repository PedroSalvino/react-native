import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export default function App () {
  
  const [valor, setValor] = useState('');
  const [de, setDe] = useState(0);
  const [para, setPara] = useState(0);
  const [resultado, setResultado] = useState('');

  async function pegarCotacao(){
    try{
      
      if(de != para && de != '' && para != ''){

        if(para == 'BTC'){

          setPara(de);
          setDe('BTC');
        }
        
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
        
        if(response){
          
          let simbolo = '';
          let resultado = 0;
          
          if(para == 'USD'){
            simbolo = '$';
          }
          else if(para == 'EUR'){
            simbolo = '€';
          }
          else if(para == 'BRL'){
            simbolo = 'R$'
          }
          else if(para == 'BTC'){
            simbolo = '₿'
          }
      
          if(de == para){
            resultado = valor;
          }
          else{
            if(de == 'USD'){
              if(para == 'EUR'){
                resultado = valor * response.data.USDEUR.ask;
              }
              else if(para == 'BRL'){
                resultado = valor * response.data.USDBRL.ask;
              }
              else{
                resultado = valor * (1/response.data.BTCUSD.ask);
              }
            }
      
            if(de == 'EUR'){
              if(para == 'USD'){
                resultado = valor * response.data.EURUSD.ask;
              }
              else if(para == 'BRL'){
                resultado = valor * response.data.EURBRL.ask;
              }
              else{
                resultado = valor * (1/response.data.BTCEUR.ask);
              }
            }
      
            if(de == 'BRL'){
              if(para == 'USD'){
                resultado = valor * response.data.BRLUSD.ask;
              }
              else if(para == 'EUR'){
                resultado = valor * response.data.BRLEUR.ask;
              }
              else{
                resultado = valor * (1/response.data.BTCBRL.ask);
              }
            
            }
            if(de == 'BTC'){
              if(para == 'USD'){
                resultado = valor * response.data.BTCUSD.ask;
              }
              else if(para == 'EUR'){
                resultado = valor *response.data.BTCEUR.ask;
              }
              else{
                resultado = valor * 1000 * response.data.BTCBRL.ask;
              }
            }
          }
          
          setResultado(simbolo+' '+resultado.toFixed(2));
        }
      }
      else{
        setResultado(valor);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas<br/>Dólar / Euro / Real / Bitcoin</Text>

      <Text style={styles.label}>Valor</Text>
      <TextInput style={styles.input} placeholder='Digite um valor' value={valor} onChangeText={value => setValor(value)}></TextInput>

      <Text style={styles.label}>De</Text>
      <Picker style={styles.input} selectedValue={de} onValueChange={value => setDe(value)}>
        <Picker.Item value={''} label='Escolha uma moeda'/>
        <Picker.Item key={1} value={'USD'} label='Dólar Americano'/>
        <Picker.Item key={2} value={'EUR'} label='Euro'/>
        <Picker.Item key={3} value={'BRL'} label='Real'/>
        <Picker.Item key={4} value={'BTC'} label='Bitcoin'/>
      </Picker>

      <Text style={styles.label}>Para</Text>
      <Picker style={styles.input} selectedValue={para} onValueChange={value => setPara(value)}>
        <Picker.Item value={''} label='Escolha uma moeda'/>
        <Picker.Item key={0} value={'USD'} label='Dólar Americano'/>
        <Picker.Item key={1} value={'EUR'} label='Euro'/>
        <Picker.Item key={2} value={'BRL'} label='Real'/>
        <Picker.Item key={3} value={'BTC'} label='Bitcoin'/>
      </Picker>

      <Pressable onPress={pegarCotacao} style={styles.botao}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      <Text style={[styles.label,styles.resultado]}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30
  },
  titulo:{
    color: '#0cd15b',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 600,
    borderBottomColor: '#0cd15b',
    borderBottomWidth: 2
  },
  input:{
    borderWidth: 2,
    borderColor: '#0466c8',
    marginBottom: 10,
    padding: 5
  },
  botao:{
    backgroundColor: '#0cd15b',
    marginHorizontal: 'auto',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  textoBotao:{
    color: '#eee'
  },
  label:{
    fontWeight: 500,
    fontSize: 18,
    marginTop: 10,
    color: '#0466c8'
  },
  resultado:{
    textAlign: 'center'
  }
});