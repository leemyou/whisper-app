import { Header } from "@/components/Header";
import { BasicTextInput } from "@/components/inputs/BasicTextInput";
import { ThemeView } from "@/components/ThemeView";
import React, { useCallback, useRef } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, View } from "react-native";
import IconRecord from "@/assets/images/icons/solar--microphone-linear.svg";
import { Colors } from "@/constants/Colors";
import { ImgButton } from "@/components/buttons/ImgButton";
import { useRouter } from "expo-router";
import { AudioRecord } from "@/components/dairies/AudioRecord";
import BottomSheet from "@gorhom/bottom-sheet";

type WriteScreenProps = {};

const WriteScreen = (props: WriteScreenProps) => {
  const router = useRouter();
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const onPressRecord = useCallback(() => {
    bottomSheetModalRef.current?.expand();
  }, []);

  const onPressSubmit = () => {
    // TODO : 저장 기능 추가
    Alert.alert("SAVE!", "저장기능을 수행합니다");
    router.dismissAll();
  };

  return (
    <>
      <ThemeView>
        <Header onNext={onPressSubmit} />

        <ScrollView>
          <BasicTextInput
            size="subTitle"
            weight="bold"
            placeholder="제목을 입력해주세요"
          />
          <Pressable style={writeS.btnMic} onPress={onPressRecord}>
            <IconRecord
              width={32}
              height={32}
              color={Colors.light.background}
            />
          </Pressable>

          <ScrollView style={writeS.contentsWrapper}>
            <BasicTextInput
              size="default"
              color="text"
              weight="regular"
              multiline
            />
          </ScrollView>

          <View style={writeS.imgBtnWrapper}>
            <ImgButton />
          </View>
        </ScrollView>
      </ThemeView>

      <AudioRecord ref={bottomSheetModalRef} />
    </>
  );
};

export default WriteScreen;

const writeS = StyleSheet.create({
  btnMic: {
    width: 42,
    height: 42,
    backgroundColor: Colors.light.main,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 10,
  },
  contentsWrapper: {
    maxHeight: 380,
    minHeight: 300,
  },
  imgBtnWrapper: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 36,
  },
});
