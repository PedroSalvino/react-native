import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      vagas : [
        {id: 1, titulo: 'Analista de Projetos de TI', salario: 8500, descricao: 'Prestar o atendimento de suporte aos usuários, executando serviços de sua área, padronizando e documentando as atividades, bem como, promovendo o treinamento da equipe no local de trabalho; Atuar junto às áreas, apoiando a  identificação de necessidades de novas tecnologias ainda não disponíveis no ambiente da empresa, que contribuam com melhorias nos processos e na automatização dos trabalhos, buscando manter-se constantemente atualizado com as novidades do mercadoExecutar o processo de levantamento e mapeamento de necessidades referentes aos recursos de informática,avaliando oportunidades versus deficiências, sugerindo ações imediatas para correção/aprimoramento,acompanhando a evolução e aplicabilidade aos negócios da empresa;',contato: 'vagas.ti@portodesantos.com.br'},
        {id: 2, titulo: 'Suporte Técnico TI', salario: 2400, descricao: 'Se você é uma pessoa que está sempre em busca de inovação e gosta de atuar em um ambiente desafiador e dinâmico, então, essa oportunidade é para você! Aqui na Solluctionn Tecnlogy o nosso objetivo é oferecer um serviço descomplicado e transparente. Responsabilidades e atribuições: · Atendimento ao cliente presencial · Traduzir as necessidades e dificuldades do cliente, e quando necessário, conduzi-lo à área específica; · Auxiliar o cliente no uso da ferramenta para otimizar sua performance', contato: '(13) 3333-0000'},
        {id: 3, titulo:'Analista qualidade TI Pleno', salario: 5315, descricao: 'Somos o Maior banco da América Latina, a marca mais valiosa do Brasil e a segunda melhor empresa para trabalhar segundo o ranking da Great Place to Work US 2021, estamos presentes em 18 países impactando diariamente mais de 55 milhões de clientes através dos nossos produtos e soluções. Queremos ser uma empresa onde pessoas de todos os gêneros, raça, idade, orientação sexual e com deficiência escolham para se desenvolver, com diversidade em clientes, tecnologias, produtos, soluções e faremos isso com você!',contato: 'vagas.ti@itau.com'}
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Vagas</Text>

        <FlatList 
        data={this.state.vagas}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vaga data={item}/>}
        />

      </View>
    );
  }
}

class Vaga extends Component{
  render(){
    return(
      <View style={styles.card}>
        <Text style={styles.tituloVaga}>{this.props.data.titulo}</Text>

        <Text style={styles.label}>Salário: R${this.props.data.salario}</Text>
        <Text style={styles.label}>Descrição: {this.props.data.descricao}</Text>
        <Text style={styles.label}>Contato: {this.props.data.contato}</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
  },
  card:{
    backgroundColor: '#403D58',
    padding: 30,
    marginVertical: 25,
    borderRadius: 30
  },
  titulo:{
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    borderBottomColor: '#403D58',
    borderBottomWidth: 2,
    color: '#403D58'
  },
  tituloVaga:{
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    color: '#66D7D1',
    marginBottom: 10
  },
  label:{
    fontSize: 18,
    color: '#eee',
    marginVertical: 15
  }
});
