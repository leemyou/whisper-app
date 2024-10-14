import React from "react";
import { Image } from "react-native";
import { weatherImages } from "@/constants/Icons";
import { Weather } from "@/constants/Diary";

type IconWeatherProps = {
  weather: Weather;
  width: number;
  height: number;
};

export const IconWeather = ({
  weather,
  width = 50,
  height = 50,
}: IconWeatherProps) => {
  return (
    <Image
      source={weatherImages[weather]}
      style={{ width: width, height: height }}
    />
  );
};
