// isOpen, modalType(date, month)를 props로 추가해준다

import dayjs, { Dayjs } from "dayjs";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

type pickerType = "date" | "month";

type ModalType = {
  isOpen: boolean;
  callBack?: (date?: Dayjs) => any;
};

export const datePickerAtom = atom<ModalType>({
  key: "datePickerAtom",
  default: {
    isOpen: false,
  },
});
export const monthPickerAtom = atom<ModalType>({
  key: "monthPickerAtom",
  default: {
    isOpen: false,
  },
});

const useDatePicker = (type: pickerType) => {
  const [datePickerState, setDatePickerState] = useRecoilState(datePickerAtom);
  const [monthPickerState, setMonthPickerState] =
    useRecoilState(monthPickerAtom);

  const open = useCallback(
    ({ callBack }: ModalType) => {
      type === "date"
        ? setDatePickerState({
            isOpen: true,
            callBack: callBack,
          })
        : setMonthPickerState({
            isOpen: true,
            callBack: callBack,
          });
    },
    [type, setDatePickerState, setMonthPickerState]
  );

  const close = useCallback(() => {
    type === "date"
      ? setDatePickerState((prev) => {
          return { ...prev, isOpen: false };
        })
      : setMonthPickerState((prev) => {
          return { ...prev, isOpen: false };
        });
  }, [type, setDatePickerState, setMonthPickerState]);

  return {
    datePickerVisible: datePickerState.isOpen,
    monthPickerVisible: monthPickerState.isOpen,
    datePickerState,
    monthPickerState,
    open,
    close,
  };
};

export default useDatePicker;
