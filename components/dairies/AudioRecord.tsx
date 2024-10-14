import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, RefObject } from "react";
import { BasicText } from "../inputs/BasicText";
import { Pressable, StyleSheet, View } from "react-native";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Header } from "../Header";
import { ThemeView } from "../ThemeView";
import IconStop from "@/assets/images/icons/solar--stop-circle-bold.svg";
import IconRerec from "@/assets/images/icons/solar--restart-circle-bold.svg";
import { Colors } from "@/constants/Colors";

type AudioRecordProps = {};

export const AudioRecord = forwardRef(
  (
    { ...rest }: AudioRecordProps,
    ref:
      | ((instance: BottomSheetMethods | null) => void)
      | RefObject<BottomSheetMethods>
      | null
      | undefined
  ) => {
    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior={"none"}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={[360]}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={false}
        handleComponent={null}
      >
        <BottomSheetView style={{ flex: 1, height: 0 }}>
          <Header
            onPrev={() => ref?.current?.close()}
            onNext={() => ref?.current?.close()}
            prevText="취소"
            nextText="저장"
          />

          <ThemeView style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <BasicText size="subTitle" weight="bold">
                2024.01.01 일기
              </BasicText>
              <BasicText size="footnote" color="grey400">
                00:00:01.48
              </BasicText>
            </View>
            <View style={styles.recordingView}></View>
            <View style={styles.btnContainer}>
              <Pressable style={styles.iconBtn}>
                <IconStop
                  width={"100%"}
                  height={"100%"}
                  color={Colors.light.main}
                />
              </Pressable>
              <Pressable style={styles.iconBtn}>
                <IconRerec
                  width={"100%"}
                  height={"100%"}
                  color={Colors.light.main}
                />
              </Pressable>
            </View>
          </ThemeView>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 24,
    justifyContent: "space-evenly",
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  recordingView: {
    backgroundColor: "red",
    height: 56,
    width: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBtn: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});
