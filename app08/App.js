import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      ads : [
        {id: 1, nome: 'HEADSET GAMER MANCER', imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-tlt-rgb02_1.jpg',link: 'https://www.pichau.com.br/headset-gamer-mancer-twilight-rgb-drivers-50mm-preto-mcr-tlt-rgb02?gclid=EAIaIQobChMIxJe1irH59gIV6-3mCh0OfgizEAQYBiABEgLDnfD_BwE'},
        {id: 2, nome: 'VINIL DUPLO TAYLOR SWIFT', imagem: 'https://universalmusic.vteximg.com.br/arquivos/ids/162433-1000-1000/vinil-duplo-taylor-swift-1-the-in-the-trees-edition-deluxe-vinyl-vinil-duplo-taylor-swift-1-the-in-th-00602435034881-00060243503488.jpg?v=637312920597470000', link: 'https://www.umusicstore.com/vinil-duplo-taylor-swift-1-the-in-the-trees-edition-deluxe-vinyl-vinil-duplo-taylor-swift-1-the-in-th-1402/p?idsku=1184&gclid=EAIaIQobChMIl5f9rLH59gIVyICRCh1KfgQdEAQYASABEgKx-PD_BwE'},
        {id: 3, nome: 'Marina - 2x Lp Electra Heart', imagem: 'https://i.pinimg.com/736x/8c/68/0f/8c680fed4b89646aad982d958606c5d0--electra-heart-marina-and-the-diamonds.jpg', link : 'https://produto.mercadolivre.com.br/MLB-2115483082-marina-and-the-diamonds-2x-lp-electra-heart-_JM#position=2&search_layout=grid&type=item&tracking_id=1f28b592-cbd4-427d-9233-ca5f72e4909a'},
        {id: 4, nome: 'Teclado Mecânico HyperX',imagem: 'https://images.kabum.com.br/produtos/fotos/150980/teclado-mecanico-gamer-hyperx-alloy-origins-60-rgb-usb-hyperx-red-switch-design-compacto-anti-ghosting-abnt2-preto-hkbo1s-rb-usg_1616771985_gg.jpg', link: 'https://www.kabum.com.br/produto/107964/teclado-mecanico-gamer-t-dagger-bora-rgb-switch-outemu-brown-pt-t-tgk315-brown?gclid=EAIaIQobChMIt76Rn7L59gIVBgyRCh3BQwQyEAQYFyABEgKiovD_BwE'}
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>
        
        <FlatList 
        horizontal={true}
        data={this.state.ads}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Anuncio data={item}/>}
        />
      </View>
    );
  }
}
export default App;

class Anuncio extends Component{
  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.tituloCard}>{this.props.data.nome}</Text>
        <br/>
        <Image
            source={{ uri: this.props.data.imagem}}
            style={styles.image}
          />
        <br/>

        <Pressable style={styles.botao} onPress={() => window.location.href=this.props.data.link}>
          <Text style={styles.textoBotao}>Ver Mais</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30
  },
  titulo:{
    color: '#D14081',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 600,
    borderBottomColor: '#D14081',
    borderBottomWidth: 2

  },
  image:{
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#EF798A',
    borderStyle: 'dotted'
  },
  card:{
    backgroundColor: '#F9F5E3',
    marginVertical: 25,
    marginHorizontal: 15,
    padding: 25,
    textAlign: 'center'
  },
  tituloCard:{
    color: '#EF798A',
    fontSize: 20,
    fontWeight: 500,
  },
  botao:{
    backgroundColor: '#D14081',
    marginHorizontal: 'auto',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  textoBotao:{
    color: '#eee'
  }
});