import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone nativo do Expo

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Text className="text-center text-2xl font-bold mb-4">AcheAqui</Text>

      <Text className="text-xl font-bold mb-2">Bem-vindo!</Text>
      <Text className="text-gray-500 mb-6">
        Identifique sua localização dentro da loja e receba ofertas personalizadas.
      </Text>

      <Text className="text-lg mb-1">E-mail</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="text-lg mb-1">Senha</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity className="bg-red-500 rounded-md p-3 mb-4">
        <Text className="text-center text-white text-lg font-bold">Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-gray-100 rounded-md p-3 mb-4">
        <Text className="text-center text-gray-700 text-lg">Cadastre-se</Text>
      </TouchableOpacity>

      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity className="flex-1 border border-gray-300 rounded-md p-3 mr-2">
          <Text className="text-center text-lg">Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 border border-gray-300 rounded-md p-3 ml-2">
          <Text className="text-center text-lg">Funcionário</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-gray-400 mb-4">ou</Text>

      <TouchableOpacity className="border border-gray-300 rounded-md p-3 flex-row justify-center items-center">
        <Ionicons name="logo-google" size={24} color="black" className="mr-2" />
        <Text className="text-center text-lg">Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
