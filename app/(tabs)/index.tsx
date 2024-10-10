import { BasicTextInput } from "@/components/inputs/BasicTextInput";
import { ThemeView } from "@/components/ThemeView";
import React from "react";

type HomeProps = {};

const HomeScreen = (props: HomeProps) => {
  return (
    <ThemeView>
      <BasicTextInput>test</BasicTextInput>
    </ThemeView>
  );
};

export default HomeScreen;
