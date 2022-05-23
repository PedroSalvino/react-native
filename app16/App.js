import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("compras.db");

const App = () => {
  const [item, setItem] = useState("");
  const [quant, setQuant] = useState("");
  const [compras, setCompras] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20),
        quantidade INTEGER)`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar a tabela! " + error.message);
        },
      );
    });
  };

  const incluirItem = () => {
    if (!item) {
      alert("Informe um item");
      return false;
    }
    if (!quant) {
      alert("Informe uma quantidade");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (nome,quantidade) VALUES (?,?)`,
        [item, quant],
        (sqlTxn, res) => {
          console.log(`${item} incluído na lista com sucesso!`);
          getItens();
          setItem("");
          setQuant("");
        },
        error => {
          console.log("Erro ao inserir um item " + error.message);
        },
      );
    });
  }

  const getItens = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, quantidade: item.quantidade });
            }
            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter itens da compra " + error.message);
        }
      );
    });
  };

  const deleteItem = item => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM compras WHERE id = ?`,
        [item],
        (sqlTxn, res) => {
          console.log(`${item} removido da lista com sucesso!`);
          setCompras('');
          getItens();
        },
        error => {
          console.log("Erro ao deletar um item da lista " + error.message);
        },
      );
    });
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text>{item.nome} </Text>
        <Text>({item.quantidade})</Text>
        <Pressable style={styles.botaoIcone} onPress={() => deleteItem(item.id)}>
          <FontAwesome name='trash' size={15} color={'#eee'}/>
        </Pressable>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getItens();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        placeholder='Digite um item para comprar'
        value={item}
        onChangeText={setItem}
        style={styles.input}
      />

      <TextInput
        placeholder='Quantidade para comprar'
        value={quant}
        onChangeText={setQuant}
        style={styles.input}
      />

      <Pressable style={styles.botao} title='Adicionar' onPress={incluirItem}>
        <Text style={styles.textoBotao}>
          <FontAwesome name='plus-circle' color={'#eee'} size={20} style={styles.iconeBotao}/>
          Adicionar na Lista
        </Text>
      </Pressable>
      
      <FlatList
        data={compras}
        renderItem={renderItem}
        key={t => t.id}
        style={styles.containerList}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30
  },
  titulo:{
    fontSize: 28,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#60a561',
    color: '#60a561'
  },
  input:{
    borderColor: '#f7b2bd',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 35
  },
  botao:{
    padding: 10,
    backgroundColor: '#e34a6f',
    borderRadius: 35,
    marginHorizontal: 'auto'
  },
  textoBotao:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  iconeBotao:{
    marginRight: 5
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
    borderColor: '#053225'
  },
  botaoIcone:{
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: '#ed474a',
    borderRadius: 35
  }
});
