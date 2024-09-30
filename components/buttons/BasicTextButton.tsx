import React, { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { BasicTextInput } from "../inputs/BasicTextInput";
import { useThemeColor } from "@/hooks/useThemeColor";

type BasicTextButtonProps = Omit<PressableProps, "children"> & {
  children: ReactNode;
};

export const BasicTextButton = ({
  children,
  disabled,
  ...rest
}: BasicTextButtonProps) => {
  const backgroundColor = useThemeColor(disabled ? "sub" : "main");

  return (
    <Pressable
      style={[btnStyle.default, { backgroundColor }]}
      disabled={disabled}
      {...rest}
    >
      <BasicTextInput color={"background"}>{children}</BasicTextInput>
    </Pressable>
  );
};

const btnStyle = StyleSheet.create({
  default: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
