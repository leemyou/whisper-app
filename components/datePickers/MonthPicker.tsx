import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Picker } from "react-native-wheel-pick";
import { BasicText } from "../inputs/BasicText";
import { getYearObjArr } from "@/utils/date";
import useDatePicker from "@/hooks/useDatePicker";

type MonthPickerProps = ModalProps;

export const MonthYearPicker = ({
  animationType = "slide",
  ...rest
}: MonthPickerProps) => {
  const { close, monthPickerVisible, monthPickerState } =
    useDatePicker("month");

  const [date, setDate] = useState({
    year: dayjs().get("y"),
    month: dayjs().get("M") + 1,
  });

  const monthArr = [...Array(12)].map((_, i) => ({
    label: `${i + 1}월`,
    value: i + 1,
  }));

  const onClickCancel = () => {
    close();
  };

  const onClickOk = () => {
    monthPickerState.callBack &&
      monthPickerState.callBack(
        dayjs()
          .set("year", date.year)
          .set("month", date.month - 1)
      );
    close();
  };

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={monthPickerVisible}
      onRequestClose={() => {
        close();
      }}
      {...rest}
    >
      <View style={style.container}>
        <View style={style.modal}>
          <View style={style.modalTop}>
            <Pressable style={style.modalBtn} onPress={onClickCancel}>
              <BasicText color="grey600" weight="bold">
                취소
              </BasicText>
            </Pressable>
            <Pressable style={style.modalBtn} onPress={onClickOk}>
              <BasicText color="main" weight="bold">
                확인
              </BasicText>
            </Pressable>
          </View>

          <View style={style.modalBottom}>
            <Picker
              selectedValue={date.year}
              pickerData={getYearObjArr(dayjs().year(), "ko")}
              onValueChange={(value: string) => {
                setDate({ ...date, year: parseInt(value) });
              }}
              style={[style.picker]}
            />
            <Picker
              selectedValue={date.month}
              pickerData={monthArr}
              onValueChange={(value: string) => {
                setDate({ ...date, month: parseInt(value) });
              }}
              style={[style.picker]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: Colors.light.backgroundElevated,
    width: "100%",
    height: 275,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  modalTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.light.grey100,
    borderBottomWidth: 1,
    height: 55,
  },
  modalBtn: {
    height: "100%",
    width: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBottom: {
    flexDirection: "row",
    width: "100%",
  },
  picker: {
    height: 220,
    width: "50%",
    backgroundColor: Colors.light.backgroundElevated,
  },
});
