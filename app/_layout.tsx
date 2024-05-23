import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomDarkTheme, CustomDefaultTheme } from "../constants/themes";
import { AuthProvider } from "../contexts/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider
        value={colorScheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor:
                colorScheme === "dark"
                  ? CustomDarkTheme.colors.background
                  : CustomDefaultTheme.colors.background,
            },
            headerTintColor:
              colorScheme === "dark"
                ? CustomDarkTheme.colors.text
                : CustomDefaultTheme.colors.text,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="profile" options={{ title: "Profile" }} />
          <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
          <Stack.Screen name="signin" options={{ title: "Sign In" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}
