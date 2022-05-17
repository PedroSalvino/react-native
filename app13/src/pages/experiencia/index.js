import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../assets/styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Experiencia() {
    //const navigation = useNavigation();
    return (
        <View style={styles.container}>  
            {/* <Pressable
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()}>
                <FontAwesome name='bars' size={35} color='#000'/>
            </Pressable> */}

            <Text style={styles.titulo}>
                <FontAwesome name='suitcase' size={30} color='#508AA8' /> Experiência Profissional
            </Text>
            
            <Text style={styles.label}>2021 ~ 2022</Text>
            <Text style={styles.titulo}>Estagiário FullStack na Santos Port Authority</Text>

            <Text style={styles.label}>2020</Text>
            <Text style={styles.titulo}>Monitor de Algoritmos e Lógica de Programação na FATEC Rubens Lara</Text>
            
            <Text style={styles.label}>2019 ~ 2020</Text>
            <Text style={styles.titulo}>Estagiário de Comunicação na FATEC Rubens Lara</Text>

        </View>
    );
}

