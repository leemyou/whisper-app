import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { BasicTextProps, textStyle } from "./BasicText";

type BasicTextInputProps = TextInputProps & BasicTextProps;

export const BasicTextInput = ({
  style,
  color = "text",
  size = "default",
  weight = "regular",
  textAlign = "left",
  placeholder = "내용을 입력해주세요",
  ...rest
}: BasicTextInputProps) => {
  return (
    <TextInput
      style={[
        size === "default" ? textStyle.default : undefined,
        size === "caption" ? textStyle.caption : undefined,
        size === "footnote" ? textStyle.footnote : undefined,
        size === "subTitle" ? textStyle.subTitle : undefined,
        size === "title" ? textStyle.title : undefined,
        weight === "regular" ? textStyle.fontRegular : undefined,
        weight === "light" ? textStyle.fontLight : undefined,
        weight === "bold" ? textStyle.fontBold : undefined,
        inputS.input,
      ]}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const inputS = StyleSheet.create({
  input: {
    paddingVertical: 6,
    lineHeight: 0,
  },
});
