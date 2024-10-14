/**
 * 랜덤한 파스텔톤의 핵사코드를 내보내는 함수
 */
export const generateRandomPastelHexColor = () => {
  const randomColorValue = () => Math.floor(Math.random() * 128 + 127); // 127 ~ 255 범위로 제한
  const r = randomColorValue();
  const g = randomColorValue();
  const b = randomColorValue();
  return `rgb(${r}, ${g}, ${b})`;
};
