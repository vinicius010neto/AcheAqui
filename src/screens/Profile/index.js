import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Button, Text, Avatar, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Importa ícones do Expo

export default function Profile() {
  const navigation = useNavigation();
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const handleLogout = () => {
    // Ao clicar, redireciona para a tela de login
    navigation.replace('Login');
  };

  const handleEdit = () => {
    setEditModalVisible(true); // Abre o modal de edição
  };

  const handleCloseModal = () => {
    setEditModalVisible(false); // Fecha o modal de edição
  };

  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Avatar.Image size={120} source={require('../../assets/profile.jpg')} style={styles.avatar} />
      <Text style={styles.userName}>Lucas Alberto</Text>

      {/* Botões de Editar e Logout */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleEdit}
          style={styles.editButton}
          icon={() => <MaterialIcons name="edit" size={24} color="black" />}
          buttonColor="#D3D3D3"
          labelStyle={styles.editButtonLabel}
        >
          Editar
        </Button>

        <Button
          mode="contained"
          onPress={handleLogout}
          style={styles.logoutButton}
          icon={() => <MaterialIcons name="logout" size={24} color="white" />}
          buttonColor="#ED1D25"
          labelStyle={styles.logoutButtonLabel}
        >
          Logout
        </Button>
      </View>

      {/* Modal de Edição */}
      <Modal visible={isEditModalVisible} animationType="slide" onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar Perfil</Text>
          
          {/* Inputs de Edição (baseado na tela de cadastro) */}
          <TextInput label="Nome completo" style={styles.input} />
          <TextInput label="E-mail" style={styles.input} keyboardType="email-address" />
          <TextInput label="Número de telefone" style={styles.input} keyboardType="phone-pad" />
          <TextInput label="Data de nascimento" style={styles.input} />

          {/* Botão de Salvar e Fechar */}
          <Button mode="contained" onPress={handleCloseModal} style={styles.saveButton} buttonColor="#ED1D25">
            Salvar
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  avatar: {
    backgroundColor: '#ED1D25',
    alignSelf: 'center',
    marginTop: 50, // Posiciona mais ao topo
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  editButton: {
    flex: 1,
    marginRight: 10,
    height: 40, // Botão mais fino
    justifyContent: 'center',
    borderRadius: 5, // Menos arredondado
  },
  logoutButton: {
    flex: 1,
    marginLeft: 10,
    height: 40, // Botão mais fino
    justifyContent: 'center',
    borderRadius: 5, // Menos arredondado
  },
  editButtonLabel: {
    color: 'black', // Texto preto no botão de editar
  },
  logoutButtonLabel: {
    color: 'white', // Texto branco no botão de logout
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  saveButton: {
    height: 50,
    justifyContent: 'center',
  },
});
