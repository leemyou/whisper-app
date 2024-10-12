import { DEFAULT_START_YEAR } from "@/constants/Month";
import { Dayjs } from "dayjs";

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

/**
 * 이미지 달력 구성을 위한 배열을 만드는 함수
 * @param date 달력 배열을 출력하고자하는 날짜
 * @param calendarImgData 이미지 데이터 배열
 * @returns [[{date: number, imgUrl: string}]]
 */
const getCalendarWithImages = (
  date: Dayjs,
  calendarImgData: { date: string; imgUrl: string }[]
) => {
  // 1. 날짜와 이미지 URL을 빠르게 찾기 위한 객체로 변환
  const imgMap = calendarImgData.reduce((acc, curr) => {
    acc[curr.date] = curr.imgUrl;
    return acc;
  }, {} as Record<string, string>);

  // 2. 해당 달이 몇 일까지 있는지 확인
  const dayOfMonth = date.daysInMonth();
  const firstDayOfMonth = date.startOf("month").locale("ko"); // 첫째 날 정보

  // 3. 빈 칸과 실제 날짜 및 이미지 URL을 함께 배열로 변환
  const calendarMatrix: { day: number | null; imgUrl: string | null }[][] = [];
  let week: { day: number | null; imgUrl: string | null }[] = [];
  const emptyDates = firstDayOfMonth.day(); // 시작 빈 날짜 개수

  // 4. 빈 칸 채우기 (해당 월의 첫 번째 주 앞의 빈 칸)
  for (let i = 0; i < emptyDates; i++) {
    week.push({ day: null, imgUrl: null });
  }

  // 5. 날짜와 이미지 매핑을 함께 처리
  for (let day = 1; day <= dayOfMonth; day++) {
    const formattedDate =
      `${date.year()}-${date.month() + 1}`.padStart(4, "0") +
      `-${day.toString().padStart(2, "0")}`;
    const imgUrl = imgMap[formattedDate] || null;

    week.push({ day, imgUrl });

    if (week.length === 7) {
      calendarMatrix.push(week);
      week = [];
    }
  }

  // 6. 남은 날짜 처리 및 null로 채워 7개 맞추기
  if (week.length > 0) {
    while (week.length < 7) {
      week.push({ day: null, imgUrl: null });
    }
    calendarMatrix.push(week);
  }

  return calendarMatrix;
};

export { getYearArr, getYearObjArr, getCalendarWithImages };
