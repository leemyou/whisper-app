import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewProps,
} from "react-native";
import ImgIcon from "@/assets/images/icons/solar--gallery-round-linear.svg";
import { Colors } from "@/constants/Colors";
import { BasicText } from "../inputs/BasicText";

type ImgButtonProps = Omit<PressableProps, "style"> & {
  style?: StyleProp<ViewProps>;
};

export const ImgButton = ({ style, ...rest }: ImgButtonProps) => {
  return (
    <Pressable style={[IbStyle.btn, style]} {...rest}>
      <ImgIcon width={52} height={52} color={Colors.light.sub} />
      <BasicText color="sub" weight="bold" size="subTitle">
        사진을 추가해주세요.
      </BasicText>
    </Pressable>
  );
};

const IbStyle = StyleSheet.create({
  btn: {
    width: 300,
    height: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.light.sub,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 16,
  },
});
