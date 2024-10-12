// isOpen, modalType(date, month)를 props로 추가해준다

import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

type pickerType = "date" | "month";

const datePickerOpenAtom = atom({
  key: "datePickerOpenAtom",
  default: false,
});

const monthPickerOpenAtom = atom({
  key: "monthPickerOpenAtom",
  default: false,
});

const useDatePicker = (type: pickerType) => {
  const [isDatePickerOpen, setIsDatePickerOpen] =
    useRecoilState(datePickerOpenAtom);
  const [isMonthPickerOpen, setIsMonthPickerOpen] =
    useRecoilState(monthPickerOpenAtom);

  const open = useCallback(() => {
    type === "date" ? setIsDatePickerOpen(true) : setIsMonthPickerOpen(true);
  }, [type, setIsDatePickerOpen, setIsMonthPickerOpen]);

  const close = useCallback(() => {
    type === "date" ? setIsDatePickerOpen(false) : setIsMonthPickerOpen(false);
  }, [type, setIsDatePickerOpen, setIsMonthPickerOpen]);

  return {
    isDatePickerOpen,
    isMonthPickerOpen,
    open,
    close,
  };
};

export default useDatePicker;
