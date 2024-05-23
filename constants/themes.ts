import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme,
} from "@react-navigation/native";

export const CustomDarkTheme: Theme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#000000", // Black background
    card: "#1c1c1e", // Dark grey for boxes
    text: "#ffffff", // White text
    primary: "#bb86fc", // Primary color for buttons or highlights
    border: "#272727", // Border color
    notification: "#ff453a", // Notification color
  },
};

export const CustomDefaultTheme: Theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#f2f2f2", // Soft grey background
    card: "#ffffff", // White for boxes
    text: "#000000", // Black text
    primary: "#6200ee", // Primary color for buttons or highlights
    border: "#e0e0e0", // Border color
    notification: "#ff453a", // Notification color
  },
};
