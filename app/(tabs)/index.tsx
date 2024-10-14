import React, { useState } from "react";
import { Alert, Pressable, StyleSheet } from "react-native";

import AddIcon from "@/assets/images/icons/solar--document-add-linear.svg";
import { Colors } from "@/constants/Colors";

import { CalendarTitle } from "@/components/calendars/CalendarTitle";
import { PictureCalender } from "@/components/calendars/PictureCalender";
import { ThemeView } from "@/components/ThemeView";
import { BasicText } from "@/components/inputs/BasicText";

import { Link, useRouter } from "expo-router";
import dayjs from "dayjs";

const HomeScreen = () => {
  const router = useRouter();
  const [calendarDate, setCalendarDate] = useState(dayjs("2024-10-10"));

  const calendarImgData = [
    { date: "2024-10-01", imgUrl: "@/assets/images/test.png" },
    { date: "2024-10-04", imgUrl: "@/assets/images/test.png" },
    { date: "2024-10-10", imgUrl: "@/assets/images/test.png" },
    { date: "2024-10-07", imgUrl: "@/assets/images/test.png" },
    { date: "2024-10-26", imgUrl: "@/assets/images/test.png" },
  ];

  const onPressDate = (date: number) => {
    Alert.alert("Press date", calendarDate.date(date).format("YYYY-MM-DD"));
  };

  const onPressAdd = () => {
    router.push("/select");
  };

  return (
    <ThemeView style={homeStyle.main}>
      <CalendarTitle
        date={calendarDate}
        setDate={setCalendarDate}
        customStyle={{ marginBottom: 32 }}
      />
      <PictureCalender
        date={calendarDate}
        onPressDay={onPressDate}
        imgDataArr={calendarImgData}
      />

      <Link href={"/select"}>
        <BasicText>test</BasicText>
      </Link>

      <Pressable onPress={onPressAdd} style={homeStyle.addBtn}>
        <AddIcon width={32} height={32} color={Colors.light.background} />
      </Pressable>
    </ThemeView>
  );
};

export default HomeScreen;

const homeStyle = StyleSheet.create({
  main: {
    marginTop: 40,
    position: "relative",
  },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: Colors.light.main,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 12,
    right: 0,
  },
});
