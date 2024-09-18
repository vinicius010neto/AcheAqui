import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EmployeeTabs from './src/screens/navigation/EmployeeTabs'; 
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SingUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'home';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Pesquisar') {
            iconName = 'search';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Carrinho') {
            iconName = 'shopping-cart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Perfil') {
            iconName = 'user';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
         // Remove os nomes
        tabBarActiveTintColor: '#ED1D25',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Pesquisar" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="Carrinho" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true, title: 'Cadastro' }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmployeeTabs"
          component={EmployeeTabs} // Novo container para funcionários
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}