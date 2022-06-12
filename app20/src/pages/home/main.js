import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, ScrollView, Pressable, StyleSheet } from 'react-native';
import api from '../../services/api';

export default function Home({ navigation }) {

    const [filmes, setFilmes] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(async () => {
        const response = await api.get("r-api/?api=filmes");
        setFilmes(response.data)
        setReady(true);
    }, [])

    if (ready) {
        return (
            <View style={styles.container}>

                <Text style={styles.titulo}>Indicação de Filmes </Text>

                <FlatList
                    data={filmes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <ScrollView>
                                <View style={styles.filme}>
                                    <Text style={styles.label}>
                                        {item.nome}
                                    </Text>
                                    <Image
                                        source={{ uri: item.foto }}
                                        style={styles.imagem}
                                    />
                                    <Pressable
                                        style={styles.botao}
                                        onPress={() => { navigation.navigate('Filme', { sinopse: item.sinopse, nome: item.nome, foto: item.foto }) }}>
                                        <Text>
                                            Leia Mais
                                        </Text>
                                    </Pressable>
                                </View>

                            </ScrollView>
                        </View>
                    )}
                />

            </View>
        );
    }
    else {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 30
    },
    titulo: {
        color: '#8d3f36',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 600,
        borderBottomColor: '#8d3f36',
        borderBottomWidth: 2
    },
    botao: {
        backgroundColor: '#fac81b',
        marginHorizontal: 'auto',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    label: {
        fontWeight: 500,
        fontSize: 20,
        marginTop: 10,
        color: '#fac81b',
        textAlign: 'center',
    },
    imagem: {
        width: 400,
        height: 300,
        marginHorizontal: 'auto',
        marginVertical: 10,
    },
    filme:{      
        backgroundColor: '#353038EE',
        padding: 15,
        borderRadius: 15,
        marginVertical: 10
    }
});