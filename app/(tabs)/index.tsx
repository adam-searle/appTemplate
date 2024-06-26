import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function HomeScreen() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>
        Welcome to CalmFocus
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
