import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../assets/styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Formacao() {
    //const navigation = useNavigation();
    return (
        <View style={styles.container}>  
            {/* <Pressable
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()}>
                <FontAwesome name='bars' size={35} color='#000'/>
            </Pressable> */}

            <Text style={styles.titulo}>
                <FontAwesome name='graduation-cap' size={30} color='#508AA8' /> Formação Acadêmica</Text>
            
            <Text style={styles.label}>2022</Text>
            <Text style={styles.titulo}>Tecnólogo em Sistemas para Internet na FATEC Rubens Lara</Text>

            <Text style={styles.label}>2019</Text>
            <Text style={styles.titulo}>Técnico em Desenvolvimento de Sistemas na ETEC Dra. Ruth Cardoso</Text>
            
            <Text style={styles.label}>2018</Text>
            <Text style={styles.titulo}>Técnico em Informática na ETEC Dra. Ruth Cardoso</Text>

        </View>
    );
}

