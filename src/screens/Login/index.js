import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { TextInput, Button, Text, Divider, SegmentedButtons, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente'); // 'cliente' para Cliente, 'funcionario' para Funcionário

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Logo centralizada */}
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>Bem-vindo!</Text>
      <Text style={styles.subText}>
        Identifique sua localização dentro da loja e receba ofertas personalizadas.
      </Text>

      <TextInput
        label="Digite seu e-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="flat" // Removendo contorno
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        underlineColor="transparent" // Remover a linha de baixo
        theme={{ colors: { background: '#D3D3D3' } }} // Fundo cinza
      />

      <TextInput
        label="Digite sua senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        mode="flat" // Removendo contorno
        style={styles.input}
        underlineColor="transparent" // Remover a linha de baixo
        theme={{ colors: { background: '#D3D3D3' } }} // Fundo cinza
      />

      <Button
        mode="contained"
        onPress={() => console.log('Entrar')}
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        buttonColor="#ED1D25"
      >
        Entrar
      </Button>

      <Button
  mode="text" // Troca para "text" para não ter contorno ou fundo
  onPress={() => console.log('Cadastro')}
  style={styles.signUpButton}
  labelStyle={styles.signUpButtonText} // Redefine o estilo do texto
>
  Cadastre-se
</Button>
      {/* Segmented Buttons para Cliente/Funcionário */}
      <SegmentedButtons
  value={role}
  onValueChange={setRole}
  buttons={[
    {
      value: 'cliente',
      label: 'Cliente',
      checkedColor: '#000000', // Cor quando o botão estiver selecionado (texto)
      uncheckedColor: '#666',  // Cor quando o botão estiver desmarcado (texto)
    },
    {
      value: 'funcionario',
      label: 'Funcionário',
      checkedColor: '#000000', // Cor quando o botão estiver selecionado (texto)
      uncheckedColor: '#666',  // Cor quando o botão estiver desmarcado (texto)
    },
  ]}
  style={styles.segmentedButton}
  theme={{ colors: { secondaryContainer: '#dbdbdb', onSecondaryContainer: '#000000' } }} // Definir as cores do fundo e texto do botão
/>

      <Divider style={styles.divider} />

      <Button
        mode="outlined"
        icon={() => (
          <Image
            source={require('../../assets/google.png')}
            style={styles.googleIcon}
            resizeMode="contain"
          />
        )}
        onPress={() => console.log('Entrar com Google')}
        style={styles.googleButton}
        textColor="#000000"
      >
        Entrar com Google
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    backgroundColor: '#dbdbdb', // Cinza
    
  },
  loginButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 16, // Aumenta a fonte do botão "Entrar"
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 10, // Aproxima mais do botão "Entrar"
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED1D25', // Cor vermelha do texto
  },

  signUpButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED1D25', // Fonte preta
  },
  segmentedButton: {
    marginTop: 20,
  },
  divider: {
    width: '100%',
    marginVertical: 20,
  },
  googleButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#dbdbdb',
    borderWidth: 1,
  },
  googleIcon: {
    width: 28, // Tamanho menor do ícone
    height: 28,
    marginRight: 8,
  },
});
