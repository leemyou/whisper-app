import React from "react";
import { Image, Pressable, PressableProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

type IconButtonProps = PressableProps & {
  iconSrc: any;
};

export const IconButton = ({ iconSrc, disabled, ...rest }: IconButtonProps) => {
  const backgroundColor = useThemeColor(disabled ? "sub" : "main");

  return (
    <>
      <Pressable
        disabled={disabled}
        style={[iconBtnStyle.btn, { backgroundColor }]}
        {...rest}
      >
        <Image source={iconSrc} style={iconBtnStyle.icon} />
      </Pressable>
    </>
  );
};

const iconBtnStyle = StyleSheet.create({
  btn: {
    width: 55,
    height: 55,
    padding: 12,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  icon: {
    width: 32,
    height: 32,
    objectFit: "cover",
  },
});
