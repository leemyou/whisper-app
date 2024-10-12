import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { BasicTextInput } from "../inputs/BasicTextInput";
import dayjs, { Dayjs } from "dayjs";
import IconArrow from "@/assets/images/icons/solar--alt-arrow-line-duotone.svg";
import { Colors } from "@/constants/Colors";
import useDatePicker from "@/hooks/useDatePicker";

type CalendarTitleProps = {
  date: Dayjs;
  setDate: Function;
  customStyle?: StyleProp<ViewStyle>;
};

export const CalendarTitle = ({
  date,
  setDate,
  customStyle,
}: CalendarTitleProps) => {
  const { open } = useDatePicker("month");

  const onPressPrev = () => {
    setDate(date.subtract(1, "month"));
  };
  const onPressNext = () => {
    setDate(date.add(1, "month"));
  };
  const onPressPicker = () => {
    open({
      isOpen: true,
      callBack: (date?: Dayjs) => date && setDate(date),
    });
  };

  return (
    <View style={[styles.container, customStyle]}>
      <Pressable style={styles.arrow} onPress={onPressPrev}>
        <IconArrow width={36} height={36} color={Colors.light.text} />
      </Pressable>
      <Pressable style={styles.textWrapper} onPress={onPressPicker}>
        <BasicTextInput style={styles.text} size="default">
          {date.format("YYYY")}
        </BasicTextInput>
        <BasicTextInput style={styles.text} size="title">
          {date.format("MMMM")}
        </BasicTextInput>
      </Pressable>
      <Pressable
        style={[styles.arrow, { transform: [{ rotate: "180deg" }] }]}
        onPress={onPressNext}
      >
        <IconArrow width={36} height={36} color={Colors.light.text} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 12,
  },
  arrow: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});
