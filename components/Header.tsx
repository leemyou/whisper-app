import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { BasicTextInput } from "./inputs/BasicTextInput";

import { useRouter } from "expo-router";

type HeaderProps = {
  prevText?: string;
  nextText?: string;
  onNext: () => void;
  onPrev?: () => void;
  disableNext?: boolean;
};

export const Header = ({
  nextText = "다음",
  prevText = "뒤로",
  onNext,
  onPrev,
  disableNext = false,
}: HeaderProps) => {
  const router = useRouter();

  const onBackPress = () => {
    onPrev ? onPrev : router.back();
  };

  const onForwardPress = () => {
    onNext && onNext();
  };

  return (
    <View style={headerS.main}>
      <Pressable onPress={onBackPress} style={headerS.textWrapper}>
        <BasicTextInput color="grey600" size="footnote" textAlign="center">
          {prevText}
        </BasicTextInput>
      </Pressable>
      <Pressable
        onPress={onForwardPress}
        disabled={disableNext}
        style={headerS.textWrapper}
      >
        <BasicTextInput
          color={disableNext ? "grey100" : "main"}
          size="footnote"
          textAlign="center"
        >
          {nextText}
        </BasicTextInput>
      </Pressable>
    </View>
  );
};

const headerS = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textWrapper: {
    width: 54,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
