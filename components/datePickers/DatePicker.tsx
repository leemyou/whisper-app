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
import { BasicTextInput } from "../inputs/BasicTextInput";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";

type DatePickerProps = Omit<ModalProps, "visible"> & {
  visible: boolean;
  setVisible: Function;
};

export const DatePicker = ({
  visible = false,
  setVisible,
  animationType = "slide",
  ...rest
}: DatePickerProps) => {
  const [date, setDate] = useState(new Date());

  const onClickCancel = () => {
    setVisible(false);
    Alert.alert("취소!", "모달에서 취소버튼을 눌렀습니다");
  };

  const onClickOk = () => {
    setVisible(false);
    Alert.alert(
      "확인!",
      `선택된 날짜는 ${dayjs(date).format("YYYY-MM-DD")}입니다`
    );
  };

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.modalTop}>
            <Pressable style={styles.modalBtn} onPress={onClickCancel}>
              <BasicTextInput color="grey600" weight="bold">
                취소
              </BasicTextInput>
            </Pressable>
            <Pressable style={styles.modalBtn} onPress={onClickOk}>
              <BasicTextInput color="main" weight="bold">
                확인
              </BasicTextInput>
            </Pressable>
          </View>
          <RNDateTimePicker
            mode="date"
            value={date}
            display="spinner"
            locale="ko"
            style={{ height: 220 }}
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
});
