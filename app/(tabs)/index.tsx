import { CalendarTitle } from "@/components/calendars/CalendarTitle";
import { PictureCalender } from "@/components/calendars/PictureCalender";
import { ThemeView } from "@/components/ThemeView";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";

const HomeScreen = () => {
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
    </ThemeView>
  );
};

export default HomeScreen;

const homeStyle = StyleSheet.create({
  main: {
    marginTop: 40,
  },
});
