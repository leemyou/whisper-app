import React from "react";
import { Image } from "react-native";
import { Mood } from "@/constants/Diary";
import { moodImages } from "@/constants/Icons";

type IconMoodProps = {
  mood: Mood;
  width: number;
  height: number;
};

export const IconMood = ({ mood, width = 50, height = 50 }: IconMoodProps) => {
  return (
    <Image source={moodImages[mood]} style={{ width: width, height: height }} />
  );
};
