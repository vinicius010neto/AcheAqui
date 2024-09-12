import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
  TextInput,
  Button,
  Text,
  Checkbox,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [receivePromotions, setReceivePromotions] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Lógica para cadastrar o usuário
    // Após cadastro, voltar para a tela de login
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
    
      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        mode="flat"
        style={styles.input}
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="flat"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="flat"
        style={styles.input}
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <Text style={styles.label}>Confirmação de Senha</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
        mode="flat"
        style={styles.input}
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <Text style={styles.label}>Número de telefone</Text>
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="flat"
        style={styles.input}
        keyboardType="phone-pad"
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <Text style={styles.label}>Data de nascimento</Text>
      <TextInput
        value={birthDate}
        onChangeText={(text) => setBirthDate(text)}
        mode="flat"
        style={styles.input}
        underlineColor="transparent"
        activeUnderlineColor="#ED1D25"
        theme={{ colors: { background: "#D3D3D3" } }}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={acceptTerms ? "checked" : "unchecked"}
          onPress={() => setAcceptTerms(!acceptTerms)}
          color="#ED1D25" // Cor ao marcar o checkbox
          uncheckedColor="#D3D3D3" // Cor quando não está marcado
        />
        <Text style={styles.checkboxLabel}>Aceito os termos e condições</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={receivePromotions ? "checked" : "unchecked"}
          onPress={() => setReceivePromotions(!receivePromotions)}
          color="#ED1D25" // Cor ao marcar o checkbox
          uncheckedColor="#D3D3D3" // Cor quando não está marcado
        />
        <Text style={styles.checkboxLabel}>
          Desejo receber promoções e novidades
        </Text>
      </View>

      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.signUpButton}
        labelStyle={styles.signUpButtonText}
        buttonColor="#ED1D25"
      >
        Cadastrar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 20, // Aproximando o conteúdo do topo
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5, // Espaçamento entre o rótulo e o input
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 12,
    backgroundColor: "#D3D3D3", // Fundo cinza claro
    borderRadius: 0, // Sem borda arredondada
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
