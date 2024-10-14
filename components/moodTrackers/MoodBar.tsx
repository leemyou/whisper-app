import React from "react";
import { StyleSheet, View } from "react-native";
import { BasicText } from "../inputs/BasicText";
import { generateRandomPastelHexColor } from "@/utils/color";

type MoodBarProps = {
  count: number;
};

export const MoodBar = ({ count = 0 }: MoodBarProps) => {
  return (
    <View style={moodBarWrapS.barWrap}>
      {[...Array(count)].map((_, index) => {
        const randomColor = generateRandomPastelHexColor(); // 각각의 MoodBar에 대한 개별 색상 생성
        return (
          <View
            style={[moodBarS.barElement, { backgroundColor: randomColor }]}
            key={`mood-bar-count-${index}`}
          />
        );
      })}
      <BasicText color="grey100" size="caption" style={[moodBarWrapS.barText]}>
        {count}
      </BasicText>
    </View>
  );
};

const moodBarWrapS = StyleSheet.create({
  barWrap: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
  },

  barText: {
    marginLeft: 5,
  },
});

const moodBarS = StyleSheet.create({
  barElement: {
    width: 5,
    height: 35,
    borderRadius: 10,
    marginRight: 1,
  },
});
