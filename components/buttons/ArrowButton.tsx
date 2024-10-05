import React from "react";
import { Image, Pressable, PressableProps, StyleSheet } from "react-native";
import { BasicTextInput } from "../inputs/BasicTextInput";
import { useThemeColor } from "@/hooks/useThemeColor";

type ArrowButtonProps = PressableProps & { title: string };

export const ArrowButton = ({ title, ...rest }: ArrowButtonProps) => {
  const background = useThemeColor("backgroundElevated");
  const arrowColor = useThemeColor("text");

  return (
    <>
      <Pressable
        style={[{ backgroundColor: background }, arrowBtnStyle.default]}
        {...rest}
      >
        <BasicTextInput>{title}</BasicTextInput>
        <Image
          source={require("@/assets/images/icons/icons-arrow.png")}
          style={[arrowBtnStyle.icon, { tintColor: arrowColor }]}
        />
      </Pressable>
    </>
  );
};

const arrowBtnStyle = StyleSheet.create({
  default: {
    height: 50,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
