import { Theme } from "@react-navigation/native";
import { Colors } from "./Colors";

const DarkTheme: Theme = {
  dark: true,
  colors: {
    // TODO : 다크모드 추가 시 컬러 변경
    primary: "#FC796A",
    background: Colors.light.background,
    card: Colors.light.backgroundElevated,
    text: Colors.light.text,
    border: "#fff",
    notification: "#FC796A",
  },
};

const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: "#FC796A",
    background: Colors.light.background,
    card: Colors.light.backgroundElevated,
    text: Colors.light.text,
    border: "#fff",
    notification: "#FC796A",
  },
};

export { DarkTheme, LightTheme };
