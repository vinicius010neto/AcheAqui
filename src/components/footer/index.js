import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Função Footer exportada como default
export default function Footer() {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-around py-2 bg-white border-t border-gray-200">
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color="#45c2a8" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Appointments')}>
        <FontAwesome name="calendar" size={24} color="#45c2a8" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Configs')}>
        <Ionicons name="settings-outline" size={24} color="#45c2a8" />
      </TouchableOpacity>
    </View>
  );
}
