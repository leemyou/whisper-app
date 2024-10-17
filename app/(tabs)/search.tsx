import { TextButton } from "@/components/buttons/TextButton";
import { BasicText } from "@/components/inputs/BasicText";
import { SearchFilter } from "@/components/searchs/SearchFilter";
import { ThemeView } from "@/components/ThemeView";
import BottomSheet, {
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { View } from "react-native";

type Props = {};

const SearchScreen = (props: Props) => {
  return (
    <>
      <ThemeView
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <SearchFilter />
        <TextButton>검색</TextButton>
      </ThemeView>
    </>
  );
};

export default SearchScreen;
