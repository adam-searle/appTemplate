import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signIn } from "../services/auth";
import { useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  index: undefined;
  signup: undefined;
  signin: undefined;
  profile: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "signin"
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

export default function SignInScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert("User signed in successfully!");
      navigation.navigate("index"); // Navigate to Home after sign in
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
      <Text style={[styles.text, { color: colors.text }]}>Sign In</Text>
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
      <Button title="Sign In" onPress={handleSignIn} color={colors.primary} />
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
