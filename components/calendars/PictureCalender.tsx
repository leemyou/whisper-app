import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import type { Dayjs } from "dayjs";
import { BasicTextInput } from "../inputs/BasicTextInput";
import { getCalendarWithImages } from "@/utils/date";
import dayjs from "dayjs";

type PictureCalenderProps = {
  date: Dayjs;
  imgDataArr: { date: string; imgUrl: string }[];
  onPressDay?: (day: number) => void;
};

export const PictureCalender = ({
  date,
  imgDataArr,
  onPressDay,
}: PictureCalenderProps) => {
  const weekOfDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const monthOfDays = getCalendarWithImages(date, imgDataArr);

  return (
    <View style={pcCalenderStyle.mainContainer}>
      {/* 요일 View */}
      <View style={pcCalenderStyle.weekDay}>
        {weekOfDay.map((value, index) => (
          <BasicTextInput
            key={value}
            size="footnote"
            color={index === 0 ? "main" : index === 6 ? "blue" : "text"}
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            {value}
          </BasicTextInput>
        ))}
      </View>

      {/* 달력 View */}
      <View style={pcCalenderStyle.calenderContainer}>
        {monthOfDays.map((week, index) => {
          return (
            <View
              style={pcCalenderStyle.calendarWeek}
              key={`pc-calnedar-week-${index}`}
            >
              {week.map((dateValue, dayIndex) => (
                <Pressable
                  style={pcCalenderStyle.calendarDate}
                  key={`pc-calnedar-day-${dayIndex}`}
                  onPress={() => {
                    if (dateValue.day !== null && onPressDay) {
                      onPressDay(dateValue.day);
                    }
                  }}
                >
                  {/* TODO : 배경이미지가 없다는 조건도 추후 추가해줘야함 */}
                  {dateValue.day === null || !dateValue.imgUrl ? (
                    <></>
                  ) : (
                    <Image
                      source={require("@/assets/images/test.png")}
                      style={pcCalenderStyle.calendarImg}
                    />
                  )}

                  <BasicTextInput
                    weight="light"
                    color={
                      dayIndex % 7 === 0
                        ? "main"
                        : dayIndex % 6 === 0
                        ? "blue"
                        : "text"
                    }
                    style={[
                      pcCalenderStyle.calendarText,
                      dateValue.day === null && { display: "none" },
                    ]}
                  >
                    {dateValue.day}
                  </BasicTextInput>
                </Pressable>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const pcCalenderStyle = StyleSheet.create({
  mainContainer: {},
  weekDay: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 8,
    marginBottom: 8,
  },
  calenderContainer: {
    width: "100%",
  },
  calendarWeek: {
    width: "100%",
    flexDirection: "row",
    columnGap: 8,
    marginBottom: 12,
    alignItems: "stretch",
  },
  calendarDate: {
    flex: 1,
    height: 60,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  calendarImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    top: 0,
    left: 0,
  },
  calendarText: {
    fontSize: 20,
    width: "100%",
    height: "100%",
    textAlign: "center",
    lineHeight: 60,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
});
