import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar a tabela " + error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  }

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        }
      );
    });
  };

  const deleteTarefa = item => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [item],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa removida com sucesso!`);
          setTarefas('');
          getTarefas();
        },
        error => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        },
      );
    });
  }

  const renderTarefa = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome} </Text>
        <Pressable style={styles.botaoIcone} onPress={() => deleteTarefa(item.id)}>
          <FontAwesome name='trash' size={15} color={'#eee'}/>
        </Pressable>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Tarefas</Text>

      <TextInput
        placeholder='Escreva uma tarefa'
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.input}
      />

      <Pressable style={styles.botao} title='Adicionar' onPress={incluirTarefa}>
        <Text style={styles.textoBotao}>
          <FontAwesome name='plus-circle' color={'#eee'} size={20} style={styles.iconeBotao}/>
          Adicionar Tarefa
        </Text>
      </Pressable>
      
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
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
    borderBottomColor: '#ffba08',
    color: '#ffba08'
  },
  input:{
    borderColor: '#ffba08',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 35
  },
  botao:{
    padding: 10,
    backgroundColor: '#1565c0',
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
    borderColor: '#1565c0'
  },
  botaoIcone:{
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: '#d00000',
    borderRadius: 35
  }

});