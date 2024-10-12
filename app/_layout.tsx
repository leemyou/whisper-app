import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, LightTheme } from "@/constants/Theme";
import { RecoilRoot } from "recoil";
import { DatePicker } from "@/components/datePickers/DatePicker";
import { MonthYearPicker } from "@/components/datePickers/MonthPicker";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    NanumSquare: require("../assets/fonts/NanumSquareRoundR.ttf"),
    NanumSquareBold: require("../assets/fonts/NanumSquareRoundB.ttf"),
    NanumSquareLight: require("../assets/fonts/NanumSquareRoundL.ttf"),
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
    <RecoilRoot>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <DatePicker />
        <MonthYearPicker />
      </ThemeProvider>
    </RecoilRoot>
  );
}
