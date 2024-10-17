import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { BasicText } from "../inputs/BasicText";
import { BasicTextInput } from "../inputs/BasicTextInput";
import { Colors } from "@/constants/Colors";
import useDatePicker from "@/hooks/useDatePicker";
import { Dayjs } from "dayjs";
import { Mood, Weather } from "@/constants/Diary";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { TextButton } from "../buttons/TextButton";

interface ISearch {
  title: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  mood: null | Mood;
  weather: null | Weather;
}

type SearchFilterProps = {};

export const SearchFilter = (props: SearchFilterProps) => {
  const { open } = useDatePicker("date");
  const [searchOptions, setSearchOption] = useState<ISearch>({
    title: "",
    startDate: null,
    endDate: null,
    mood: null,
    weather: null,
  });

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { dismiss } = useBottomSheetModal();

  const onPressOpenDatePicker = (type: "start" | "end") => {
    open({
      isOpen: true,
      callBack: (date?: Dayjs) =>
        type === "start"
          ? date && setSearchOption((prev) => ({ ...prev, startDate: date }))
          : date && setSearchOption((prev) => ({ ...prev, endDate: date })),
    });
  };

  const onChangeTitle = (title: string) => {
    setSearchOption((prev) => ({ ...prev, title }));
  };

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => [300], []);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={1}
        // appearsOnIndex={2}
      />
    ),
    []
  );

  console.log(searchOptions);

  return (
    <View style={searchFilterS.main}>
      <View style={searchFilterS.filterWrapper}>
        <BasicText>제목</BasicText>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <BasicTextInput
            textAlign="right"
            value={searchOptions.title}
            onChangeText={onChangeTitle}
          />
        </View>
      </View>
      <View style={searchFilterS.filterWrapper}>
        <BasicText>기간</BasicText>
        <View
          style={{ flexDirection: "row", columnGap: 8, alignItems: "center" }}
        >
          <Pressable
            onPress={() => onPressOpenDatePicker("start")}
            style={{ alignItems: "flex-end", paddingVertical: 4 }}
          >
            <BasicText color={searchOptions.startDate ? "text" : "grey100"}>
              {searchOptions.startDate
                ? searchOptions.startDate.format("YYYY-MM-DD")
                : "시작 기간"}
            </BasicText>
          </Pressable>
          <BasicText color="grey100">~</BasicText>
          <Pressable
            onPress={() => onPressOpenDatePicker("end")}
            style={{
              alignItems: "flex-end",
              paddingVertical: 4,
            }}
          >
            <BasicText color={searchOptions.endDate ? "text" : "grey100"}>
              {searchOptions.endDate
                ? searchOptions.endDate.format("YYYY-MM-DD")
                : "종료 기간"}
            </BasicText>
          </Pressable>
        </View>
      </View>
      <View style={searchFilterS.filterWrapper}>
        <BasicText>기분</BasicText>
        <Pressable
          style={{ flex: 1, alignItems: "flex-end", paddingVertical: 4 }}
          onPress={handlePresentModalPress}
        >
          <BasicText color="grey100">기분을 선택해주세요</BasicText>
        </Pressable>
      </View>
      <View style={[searchFilterS.filterWrapper, { borderBottomWidth: 0 }]}>
        <BasicText>날씨</BasicText>
        <Pressable
          style={{ flex: 1, alignItems: "flex-end", paddingVertical: 4 }}
        >
          <BasicText color="grey100">날씨를 선택해주세요</BasicText>
        </Pressable>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView>
          <BasicText>Awesome 🎉</BasicText>
          <TextButton onPress={() => dismiss()}>닫기</TextButton>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const searchFilterS = StyleSheet.create({
  main: {
    width: "100%",
    paddingHorizontal: 14,
    backgroundColor: Colors.light.backgroundElevated,
    borderRadius: 12,
    paddingVertical: 6,
  },
  filterWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.light.grey100,
    borderBottomWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 4,
    columnGap: 12,
  },
});
