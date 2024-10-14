import React, { useState } from "react";
import {
  Alert,
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { BasicText } from "../inputs/BasicText";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import useDatePicker from "@/hooks/useDatePicker";

type DatePickerProps = Omit<ModalProps, "visible">;

export const DatePicker = ({
  animationType = "slide",
  ...rest
}: DatePickerProps) => {
  const { close, datePickerVisible, datePickerState } = useDatePicker("date");
  const [date, setDate] = useState(new Date());

  const onClickCancel = () => {
    close();
  };

  const onClickOk = () => {
    datePickerState.callBack && datePickerState.callBack(dayjs(date));
    close();
  };

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={datePickerVisible}
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.modalTop}>
            <Pressable style={styles.modalBtn} onPress={onClickCancel}>
              <BasicText color="grey600" weight="bold">
                취소
              </BasicText>
            </Pressable>
            <Pressable style={styles.modalBtn} onPress={onClickOk}>
              <BasicText color="main" weight="bold">
                확인
              </BasicText>
            </Pressable>
          </View>
          <RNDateTimePicker
            mode="date"
            value={date}
            display="spinner"
            locale="ko"
            style={styles.picker}
            onChange={(param) => setDate(new Date(param.nativeEvent.timestamp))}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: Colors.light.backgroundElevated,
    width: "100%",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
    height: 270,
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
  picker: {
    height: 220,
    width: "100%",
  },
});
