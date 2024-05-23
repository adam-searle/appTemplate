import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signUp } from "../services/auth";
import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  index: undefined;
  signup: undefined;
  signin: undefined;
  profile: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "signup"
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

export default function SignUpScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("User signed up successfully!");
      navigation.navigate("index"); // Navigate to Home after sign up
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Sign Up</Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
        placeholder="Email"
        placeholderTextColor={colors.text}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
        placeholder="Password"
        placeholderTextColor={colors.text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
