import { CalendarTitle } from "@/components/calendars/CalendarTitle";
import { IconMood } from "@/components/Icons/IconMood";
import { BasicText } from "@/components/inputs/BasicText";
import { MoodBar } from "@/components/moodTrackers/MoodBar";
import { ThemeView } from "@/components/ThemeView";
import { Colors } from "@/constants/Colors";
import { Mood } from "@/constants/Diary";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const MoodScreen = () => {
  const [calendarDate, setCalendarDate] = useState(dayjs("2024-10-10"));

  const moodData = [
    { mood: Mood.HAPPY, count: 24 },
    { mood: Mood.SURPRISE, count: 0 },
    { mood: Mood.NONE, count: 10 },
    { mood: Mood.ANGRY, count: 4 },
    { mood: Mood.SCARED, count: 2 },
    { mood: Mood.SAD, count: 8 },
  ];

  return (
    <ThemeView style={moodS.mainContainer}>
      <CalendarTitle
        date={calendarDate}
        setDate={setCalendarDate}
        customStyle={{ marginBottom: 24, marginTop: 20 }}
      />
      <FlatList
        data={moodData}
        renderItem={(item) => (
          <View style={moodS.listItem}>
            <IconMood mood={item.item.mood} width={46} height={46} />
            <MoodBar count={item.item.count} />
          </View>
        )}
      />
      <View style={moodS.textContainer}>
        <BasicText textAlign="center" weight="bold">
          이번달엔{" "}
          <BasicText color={"main"} weight="bold">
            기쁜{" "}
          </BasicText>
          일기가 가장 많았네요
        </BasicText>
        <BasicText textAlign="center" weight="bold">
          오늘 좋은 하루 보내길 바라요:)
        </BasicText>
      </View>
    </ThemeView>
  );
};

export default MoodScreen;

const moodS = StyleSheet.create({
  mainContainer: {},
  scrollContainer: {},
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  textContainer: {
    width: "90%",
    backgroundColor: Colors.light.backgroundElevated,
    paddingVertical: 22,
    borderRadius: 12,
    marginBottom: 24,
    marginHorizontal: "auto",
  },
});
