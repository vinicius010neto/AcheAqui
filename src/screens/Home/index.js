import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native';

// Produtos mock para o carrossel
const products = [
  { id: 1, name: 'Fone de Ouvido', oldPrice: 'R$ 199,99', newPrice: 'R$ 149,99', discount: '25%', image: require('../../assets/fone.webp') },
  { id: 2, name: 'Smartphone', oldPrice: 'R$ 1.499,99', newPrice: 'R$ 1.199,99', discount: '20%', image: require('../../assets/smartphone.webp') },
  { id: 3, name: 'TV LED 32"', oldPrice: 'R$ 1.099,99', newPrice: 'R$ 899,99', discount: '18%', image: require('../../assets/tv.jpg') },
  { id: 4, name: 'Caixa de Som Bluetooth', oldPrice: 'R$ 299,99', newPrice: 'R$ 249,99', discount: '17%', image: require('../../assets/caixa_som.jpg') },
  { id: 5, name: 'Mouse Gamer', oldPrice: 'R$ 99,99', newPrice: 'R$ 79,99', discount: '20%', image: require('../../assets/mouse.jpg') }
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Foto de perfil, nome e botão Ver Perfil */}
      <View style={styles.profileContainer}>
        <View style={styles.profileSection}>
          <Avatar.Image size={40} source={require('../../assets/profile.jpg')} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Lucas Alberto</Text>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Text style={styles.profileButtonText}>Ver Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Seção atual */}
      <View style={styles.sectionContainer}>
        <Image source={require('../../assets/eletronicos.jpg')} style={styles.sectionImage} />
        <Text style={styles.sectionText}>Seção atual: Eletrônicos</Text>
      </View>

      {/* Promoções recomendadas */}
      <Text style={styles.recommendedText}>Promoções recomendadas</Text>

      {/* Carrossel de produtos em promoção */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.oldPrice}>{product.oldPrice}</Text>
            <Text style={styles.newPrice}>{product.newPrice}</Text>
            <Text style={styles.discount}>{product.discount} de desconto</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fundo mais escuro
    paddingHorizontal: 20,
  },
  profileContainer: {
    backgroundColor: '#fff', // Container branco puro
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTextContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '400',
    marginRight: 10,
  },
  profileButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 60,
  },
  profileButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 30,
    position: 'relative',
    marginTop: 20,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  sectionText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carousel: {
    marginBottom: 30,
  },
  productCard: {
    width: 160,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  oldPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginTop: 5,
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  discount: {
    fontSize: 12,
    color: '#4caf50',
    marginTop: 5,
  },
});
