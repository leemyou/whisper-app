import React from "react";
import { Diary } from "@/components/dairies/Diary";
import { ThemeView } from "@/components/ThemeView";
import dayjs from "dayjs";
import { Mood, Weather } from "@/constants/Diary";

type Props = {};

const ListScreen = (props: Props) => {
  return (
    <ThemeView>
      <Diary
        content="오늘의 일기! 즐겁다"
        date={dayjs()}
        mood={Mood.SCARED}
        title="일기 제목"
        weather={Weather.LITTLE_CLOUDY}
        imgUrl="@/assets/images/test.png"
        audio="test"
      />
    </ThemeView>
  );
};

export default ListScreen;
