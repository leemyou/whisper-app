import { Header } from "@/components/Header";
import { BasicText } from "@/components/inputs/BasicText";
import { ThemeView } from "@/components/ThemeView";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CalendarIcon from "@/assets/images/icons/solar--calendar-linear.svg";
import { Colors } from "@/constants/Colors";
import { IconMood } from "@/components/Icons/IconMood";
import { Mood, Weather } from "@/constants/Diary";
import { IconWeather } from "@/components/Icons/IconWeather";

type SelectScreenProps = {};

const SelectScreen = (props: SelectScreenProps) => {
  const router = useRouter();

  const onPressDate = () => {
    // TODO : datePicker 연동
  };

  // TODO : select icon 연동
  // TODO : select한 정보 다음 화면으로 같이 이동되도록 연결

  return (
    <ThemeView>
      <Header onNext={() => router.push("/write")} prevText="취소" />

      <Pressable style={selectS.dateWrapper} onPress={onPressDate}>
        <CalendarIcon width={24} height={24} color={Colors.light.text} />
        <BasicText
          size="subTitle"
          textAlign="auto"
          weight="bold"
          style={selectS.date}
        >
          2024.10.10
        </BasicText>
      </Pressable>

      <View style={selectS.moodWeatherContainer}>
        <BasicText>기분</BasicText>
        <View style={selectS.iconBtnWrapper}>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.HAPPY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.SURPRISE} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.NONE} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.ANGRY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.SCARED} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconMood mood={Mood.SAD} width={46} height={46} />
          </Pressable>
        </View>
      </View>

      <View style={selectS.moodWeatherContainer}>
        <BasicText>날씨</BasicText>
        <View style={selectS.iconBtnWrapper}>
          <Pressable style={selectS.iconBtn}>
            <IconWeather weather={Weather.SUNNY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconWeather
              weather={Weather.LITTLE_CLOUDY}
              width={46}
              height={46}
            />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconWeather weather={Weather.CLOUDY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconWeather weather={Weather.RAINY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconWeather weather={Weather.SNOWY} width={46} height={46} />
          </Pressable>
          <Pressable style={selectS.iconBtn}>
            <IconWeather weather={Weather.THUNDER} width={46} height={46} />
          </Pressable>
        </View>
      </View>
    </ThemeView>
  );
};

export default SelectScreen;

const selectS = StyleSheet.create({
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    marginTop: 24,
  },
  date: {
    lineHeight: 32,
  },
  moodWeatherContainer: {
    marginTop: 36,
  },
  iconBtnWrapper: {
    marginTop: 28,
    flexDirection: "row",
    columnGap: 12,
    rowGap: 8,
    flexWrap: "wrap",
  },
  iconBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
