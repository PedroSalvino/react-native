import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(25))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar a tabela "+ error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa){
      alert("Informe uma tarefa");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(`INSERT INTO tarefas (nome) VALUES (?)`),
      [tarefa],
      (sqlTxn, res) =>{
        console.log(`${tarefa} Tarefa incluída com sucesso!`);
        getTarefas();
        setTarefa("");
      },
      error =>{
        console.log("Erro ao inserir uma tarefa "+error.message);
      }
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn,res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if(len > 0){
            let results = [];
            for(let i = 0; i< len; i++){
              let item = res.rows.item(i);
              results.push({id: item.id, nome: item.nome});
            }
            setTarefas(results);
            console.log(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas "+error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <TextInput
        placeholder='Escreva uma tarefa'
        value={tarefa}
        onChangeText={setTarefa}
        style={{marginHorizontal: 0}}
      />

      <Button title='Adicionar' onPress={incluirTarefa}/>

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

