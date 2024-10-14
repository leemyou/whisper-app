import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  type TextProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type BasicTextProps = {
  size?: "caption" | "footnote" | "default" | "subTitle" | "title";
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  weight?: "regular" | "bold" | "light";
  textAlign?: TextStyle["textAlign"];
};

type BTextProps = TextProps & BasicTextProps;

export const BasicText = ({
  style,
  color = "text",
  size = "default",
  weight = "regular",
  textAlign = "auto",
  ...rest
}: BTextProps) => {
  const textColor = useThemeColor(color);

  return (
    <Text
      style={[
        { color: textColor, textAlign: textAlign },
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

export const textStyle = StyleSheet.create({
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
