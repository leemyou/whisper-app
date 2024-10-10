import { PictureCalender } from "@/components/calendars/PictureCalender";
import dayjs from "dayjs";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";

type HomeProps = {};

const HomeScreen = (props: HomeProps) => {
  const calendarDate = dayjs("2024-10-10");

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
    <View style={homeStyle.main}>
      <PictureCalender
        date={calendarDate}
        onPressDay={onPressDate}
        imgDataArr={calendarImgData}
      />
    </View>
  );
};

export default HomeScreen;

const homeStyle = StyleSheet.create({
  main: {
    marginTop: 20,
    marginHorizontal: 16,
  },
});
