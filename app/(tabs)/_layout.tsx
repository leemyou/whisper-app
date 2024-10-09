import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// icons
import Mood from "@/assets/images/icons/solar--chart-square-outline.svg";
import MoodFocus from "@/assets/images/icons/solar--chart-square-bold.svg";
import List from "@/assets/images/icons/solar--notebook-minimalistic-linear.svg";
import ListFocus from "@/assets/images/icons/solar--notebook-minimalistic-bold.svg";
import Home from "@/assets/images/icons/solar--home-smile-angle-outline.svg";
import HomeFocus from "@/assets/images/icons/solar--home-smile-angle-bold.svg";
import Search from "@/assets/images/icons/solar--minimalistic-magnifer-linear.svg";
import SearchFocus from "@/assets/images/icons/solar--minimalistic-magnifer-bold.svg";
import Setting from "@/assets/images/icons/solar--settings-outline.svg";
import SettingFocus from "@/assets/images/icons/solar--settings-bold.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="mood"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <MoodFocus color={color} width={28} height={28} />
            ) : (
              <Mood color={color} width={28} height={28} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <ListFocus color={color} width={28} height={28} />
            ) : (
              <List color={color} width={28} height={28} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <HomeFocus color={color} width={28} height={28} />
            ) : (
              <Home color={color} width={28} height={28} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <SearchFocus color={color} width={28} height={28} />
            ) : (
              <Search color={color} width={28} height={28} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <SettingFocus color={color} width={28} height={28} />
            ) : (
              <Setting color={color} width={28} height={28} />
            );
          },
        }}
      />
    </Tabs>
  );
}
