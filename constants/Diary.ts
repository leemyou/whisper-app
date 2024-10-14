import { Dayjs } from "dayjs";

export interface TDiary {
  date: Dayjs;
  weather: Weather;
  mood: Mood;
  imgUrl: string;
  audio?: string;
  title: string;
  content: string;
}

export enum Weather {
  SUNNY = "sunny",
  LITTLE_CLOUDY = "littleCloudy",
  CLOUDY = "cloudy",
  RAINY = "rainy",
  SNOWY = "snowy",
  THUNDER = "thunder",
}

export enum Mood {
  HAPPY = "happy",
  SURPRISE = "surprise",
  SAD = "sad",
  ANGRY = "angry",
  NONE = "none",
  SCARED = "scared",
}
