import { BasicTextInput } from "@/components/inputs/BasicTextInput";
import React from "react";
import Icons from "../../assets/images/icons/solar--chart-square-bold.svg";
import { Colors } from "@/constants/Colors";

type Props = {};

const ListScreen = (props: Props) => {
  return (
    <>
      <BasicTextInput>List</BasicTextInput>
      <BasicTextInput>시발 나보고 어쩌라는 건데</BasicTextInput>
      <Icons width="24px" height="24px" color={Colors.light.main} />
    </>
  );
};

export default ListScreen;
