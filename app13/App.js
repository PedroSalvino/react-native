import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Pessoal from './src/pages/pessoal';
import Formacao from './src/pages/formacao';
import Experiencia from './src/pages/experiencia';

const Tab = createBottomTabNavigator();

const icons = {
  Pessoal: {
    name: 'id-card',
  },
  Formacao: {
    name: 'graduation-cap',
  },
  Experiencia: {
    name: 'suitcase',
  }
}
export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={ ({route}) => ({tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <FontAwesome name={name} color={color} size={size} />
            }
        }) }>
          <Tab.Screen name='Pessoal' component={Pessoal} />
          <Tab.Screen name='Formacao' component={Formacao} />
          <Tab.Screen name='Experiencia' component={Experiencia} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}