import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Filme({ route }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>


            <Text style={styles.titulo}>{route.params?.nome}</Text>

            <View>
                <Image
                    source={{ uri: route.params?.foto }}
                    style={styles.imagem}
                />
                <Text style={styles.label}>
                    Sinopse
                </Text>

                <Text style={styles.texto}>
                    {route.params?.sinopse}
                </Text>
            </View>

            <Pressable
                style={styles.botao}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text>
                    Voltar
                </Text>
            </Pressable>

        </View>
    )
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
        paddingVertical: 20,
        paddingHorizontal: 50
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
    filme: {
        backgroundColor: '#353038EE',
        padding: 15,
        borderRadius: 15,
        marginVertical: 10
    },
    texto:{
        fontSize: 18,
        color: '#353038',
        textAlign: 'justify',
        marginVertical: 10
    }

});