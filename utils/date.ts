import { DEFAULT_START_YEAR } from "@/constants/Month";

/**
 * 연도 배열을 구하는 함수
 * @param endYear 종료연도
 * @param format 'default' | 'ko'
 * @returns string[]
 */
const getYearArr = (endYear: number, format: "default" | "ko") => {
  return Array.from({ length: endYear - DEFAULT_START_YEAR + 1 }, (v, i) =>
    format === "ko" ? 2000 + i + "년" : 2000 + i + ""
  );
};

const getYearObjArr = (endYear: number, format: "default" | "ko") => {
  return Array.from({ length: endYear - DEFAULT_START_YEAR + 1 }, (v, i) => ({
    label: format === "ko" ? 2000 + i + "년" : 2000 + i + "",
    value: 2000 + i,
  }));
};

export { getYearArr, getYearObjArr };
