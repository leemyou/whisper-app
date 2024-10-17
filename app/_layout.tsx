import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, LightTheme } from "@/constants/Theme";
import { RecoilRoot } from "recoil";
import { DatePicker } from "@/components/Pickers/DatePicker";
import { MonthYearPicker } from "@/components/Pickers/MonthPicker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : LightTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

              {/* write stack */}
              <Stack.Screen
                name="select"
                options={{
                  presentation: "modal",
                  gestureEnabled: false,
                  // autoHideHomeIndicator: false,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="write"
                options={{
                  presentation: "modal",
                  gestureEnabled: false,
                  // autoHideHomeIndicator: false,
                  headerShown: false,
                }}
              />

              <Stack.Screen name="+not-found" />
            </Stack>
            <DatePicker />
            <MonthYearPicker />
          </ThemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}
