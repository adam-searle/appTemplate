import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native";

/**
 * Get the current color scheme (light or dark).
 */
export function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() ?? "light";
}
