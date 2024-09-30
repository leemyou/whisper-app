import React from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

type BasicTextProps = TextProps & {
  type?:
    | "default"
    | "defaultBold"
    | "caption"
    | "footnote"
    | "subTitle"
    | "title";
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export const BasicText = ({
  style,
  type = "default",
  color = "text",
  ...rest
}: BasicTextProps) => {
  const textColor = useThemeColor(color);

  return (
    <Text
      style={[
        { fontFamily: "NanumSquare" },
        { color: textColor },
        type === "default" ? textStyle.default : undefined,
        type === "defaultBold" ? textStyle.defaultBold : undefined,
        type === "caption" ? textStyle.caption : undefined,
        type === "footnote" ? textStyle.footnote : undefined,
        type === "subTitle" ? textStyle.subTitle : undefined,
        type === "title" ? textStyle.title : undefined,
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
    fontWeight: "600",
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
    fontWeight: "bold",
  },
});
