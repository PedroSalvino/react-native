import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Pessoal from './src/pages/pessoal';
import Formacao from './src/pages/formacao';
import Experiencia from './src/pages/experiencia';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Pessoal"
          component={Pessoal}
        />
        <Drawer.Screen
          name="Formacao"
          component={Formacao}
        />
        <Drawer.Screen
          name="Experiencia"
          component={Experiencia}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
