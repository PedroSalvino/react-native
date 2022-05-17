import React from 'react';
import { View, Text, Button, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../assets/styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Pessoal() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>  
            <Pressable
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()}>
                <FontAwesome name='bars' size={35} color='#000'/>
            </Pressable>

            <Text style={styles.titulo}>
            <FontAwesome name='id-card' size={30} color='#508AA8' /> Informações Pessoais</Text>

            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/52542914?v=4'}}
            style={styles.image}
            />
            <Text style={styles.titulo}>Pedro Salvino</Text>

            <Text style={styles.titulo}>22 anos</Text>
            
            <Text style={styles.titulo}>Santos, SP</Text>
        </View>
    );
}

