// src/navigation/FuncionarioTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Calls from '../Calls';
import EmployeeProfile from '../EmployeeProfile';
import RegisterOffer from '../RegisterOffer';

const Tab = createBottomTabNavigator();

export default function EmployeeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="RegisterOffer"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Registrar Oferta') {
            iconName = 'plus-square';
          } else if (route.name === 'Chamados') {
            iconName = 'phone';
          } else if (route.name === 'Perfil') {
            iconName = 'user';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ED1D25',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Registrar Oferta" component={RegisterOffer} options={{ headerShown: false }}/>
      <Tab.Screen name="Chamados" component={Calls} options={{ headerShown: false }}/>
      <Tab.Screen name="Perfil" component={EmployeeProfile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
