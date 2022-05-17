import {StyleSheet} from 'react-native';

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
    },
    image:{
      width: 400,
      height: 400,
      marginHorizontal: 'auto',
      marginVertical: 30
      
    }
});

export {styles}