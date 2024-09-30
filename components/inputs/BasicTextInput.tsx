import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type BasicTextInputProps = TextProps & {
  size?: "caption" | "footnote" | "default" | "subTitle" | "title";
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  weight?: "regular" | "bold" | "light";
};

export const BasicTextInput = ({
  style,
  color = "text",
  size = "default",
  weight = "regular",
  ...rest
}: BasicTextInputProps) => {
  const textColor = useThemeColor(color);

  return (
    <Text
      style={[
        { color: textColor },
        size === "default" ? textStyle.default : undefined,
        size === "caption" ? textStyle.caption : undefined,
        size === "footnote" ? textStyle.footnote : undefined,
        size === "subTitle" ? textStyle.subTitle : undefined,
        size === "title" ? textStyle.title : undefined,
        weight === "regular" ? textStyle.fontRegular : undefined,
        weight === "light" ? textStyle.fontLight : undefined,
        weight === "bold" ? textStyle.fontBold : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

const textStyle = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    lineHeight: 24,
  },
  footnote: {
    fontSize: 14,
    lineHeight: 24,
  },
  subTitle: {
    fontSize: 24,
    lineHeight: 24,
  },
  title: {
    fontSize: 28,
    lineHeight: 32,
  },

  fontRegular: {
    fontFamily: "NanumSquare",
  },
  fontBold: {
    fontFamily: "NanumSquareBold",
  },
  fontLight: {
    fontFamily: "NanumSquareLight",
  },
});
