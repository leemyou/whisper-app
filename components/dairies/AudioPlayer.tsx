import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import PlayIcon from "@/assets/images/icons/solar--play-circle-bold.svg";
import StopIcon from "@/assets/images/icons/solar--pause-circle-bold.svg";
import ForwardIcon from "@/assets/images/icons/solar--rewind-10-seconds-forward-linear.svg";
import BackIcon from "@/assets/images/icons/solar--rewind-10-seconds-back-linear.svg";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { Audio, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";

type AudioPlayerProps = {
  style?: StyleProp<ViewStyle>;
};

export const AudioPlayer = ({ style }: AudioPlayerProps) => {
  // const [sound, setSound] = useState<Sound>();
  // const context = useContext(AudioContext);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0); // 현재 재생 위치
  const [duration, setDuration] = useState<number>(1); // 트랙의 전체 길이
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const soundRef = useRef<Audio.Sound | null>(null); // Sound object reference for easy access

  // 오디오 로드 및 재생 함수
  const loadSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("@/assets/audios/Lost_Found.mp3"), // 트랙 파일 경로
        { shouldPlay: false }
      );
      setSound(sound);
      soundRef.current = sound;
      setIsPlaying(true);

      // 트랙 상태 업데이트
      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis ?? 0);
          setDuration(status.durationMillis ?? 1);
          setIsLoaded(true);
          setIsPlaying(status.isPlaying ?? false);
        } else {
          setIsLoaded(false);
        }
      });
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  // 재생 및 일시 정지 토글
  const togglePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 재생 위치 업데이트
  const handleSliderChange = async (value: number) => {
    if (sound && isLoaded) {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition);
    }
  };

  // 10초 앞으로 이동
  const seekBack = async () => {
    if (sound && isLoaded) {
      const newPosition = Math.min(position - 10000, duration); // 현재 위치에 10초를 빼고, 최대값은 duration으로 설정
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition); // 현재 위치 업데이트
    }
  };

  // 10초 앞으로 이동
  const seekForward = async () => {
    if (sound && isLoaded) {
      const newPosition = Math.min(position + 10000, duration); // 현재 위치에 10초를 더하고, 최대값은 duration으로 설정
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition); // 현재 위치 업데이트
    }
  };

  // 플레이어 초기화
  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync(); // 컴포넌트가 언마운트될 때 오디오 정리
      }
    };
  }, []);

  return (
    <BlurView
      intensity={70}
      tint="light"
      style={[audioStyle.mainContainer, style]}
    >
      <Slider
        style={{ width: "100%" }}
        minimumValue={0}
        maximumValue={1}
        value={Number((position / duration).toFixed(3))}
        onValueChange={handleSliderChange}
        minimumTrackTintColor={Colors.light.main}
        maximumTrackTintColor={Colors.light.sub}
      />
      <View style={audioStyle.btnWrapper}>
        <Pressable style={audioStyle.btn} onPress={seekBack}>
          <BackIcon width={40} height={40} color={Colors.light.main} />
        </Pressable>

        <Pressable
          onPress={togglePlayPause}
          style={audioStyle.btn}
          disabled={!isLoaded}
        >
          {isPlaying ? (
            <StopIcon width={40} height={40} color={Colors.light.main} />
          ) : (
            <PlayIcon width={40} height={40} color={Colors.light.main} />
          )}
        </Pressable>

        <Pressable style={audioStyle.btn} onPress={seekForward}>
          <ForwardIcon width={40} height={40} color={Colors.light.main} />
        </Pressable>
      </View>
    </BlurView>
  );
};

const audioStyle = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    borderRadius: 16,
    height: 100,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  soundBar: {
    marginBottom: 10,
  },
  btnWrapper: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 14,
  },
  btn: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
});
