import React from "react";
import { SafeAreaView, StyleSheet, ViewProps } from "react-native";

type ThemeViewProps = ViewProps;

export const ThemeView = ({ style, ...rest }: ThemeViewProps) => {
  return <SafeAreaView style={[baseStyles.container, style]} {...rest} />;
};

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
    marginHorizontal: 16,
  },
});
