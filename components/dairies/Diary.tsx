import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BasicTextInput } from "../inputs/BasicTextInput";
import dayjs from "dayjs";
import { TDiary } from "@/constants/Diary";
import { Colors } from "@/constants/Colors";
import { AudioPlayer } from "./AudioPlayer";
import { IconMood } from "../Icons/IconMood";
import { IconWeather } from "../Icons/IconWeather";

type DiaryProps = TDiary;

export const Diary = ({
  date,
  mood,
  weather,
  title,
  content,
  imgUrl,
  audio,
}: DiaryProps) => {
  return (
    <View style={dStyle.mainContainer}>
      <View style={dStyle.top}>
        <View>
          <BasicTextInput
            size="caption"
            color="grey400"
            style={{ lineHeight: 16 }}
          >
            {dayjs(date).format("dddd")}
          </BasicTextInput>
          <BasicTextInput
            size="caption"
            color="grey400"
            style={{ lineHeight: 16 }}
          >
            {dayjs(date).format("YYYY.MM.DD")}
          </BasicTextInput>
        </View>

        <View style={dStyle.topMood}>
          <IconMood mood={mood} width={30} height={30} />
          <IconWeather weather={weather} width={30} height={30} />
        </View>
      </View>

      <View style={dStyle.middle}>
        <BasicTextInput size="subTitle">{title}</BasicTextInput>
        <View style={dStyle.middleImgWrapper}>
          <Image
            source={require("@/assets/images/test.png")}
            style={dStyle.middleImg}
          />
          {audio && <AudioPlayer style={dStyle.middleSoundBox} />}
        </View>
      </View>
      <View style={dStyle.bottom}>
        <BasicTextInput>{content}</BasicTextInput>
      </View>
    </View>
  );
};

const dStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.light.backgroundElevated,
    borderRadius: 10,
    padding: 16,
    paddingBottom: 28,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  topMood: {
    flexDirection: "row",
    columnGap: 4,
  },
  middle: {},
  middleImgWrapper: {
    position: "relative",
    width: 302,
    height: 302,
    margin: "auto",
    marginTop: 12,
    alignItems: "center",
  },
  middleImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  middleSoundBox: {
    position: "absolute",
    width: "92%",
    bottom: 10,
  },
  bottom: { marginTop: 16 },
});
