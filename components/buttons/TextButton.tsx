import React, { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { BasicText } from "../inputs/BasicText";
import { useThemeColor } from "@/hooks/useThemeColor";

type TextButtonProps = Omit<PressableProps, "children"> & {
  children: ReactNode;
};

export const TextButton = ({
  children,
  disabled,
  ...rest
}: TextButtonProps) => {
  const backgroundColor = useThemeColor(disabled ? "sub" : "main");

  return (
    <Pressable
      style={[btnStyle.default, { backgroundColor }]}
      disabled={disabled}
      {...rest}
    >
      <BasicText color={"background"}>{children}</BasicText>
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
