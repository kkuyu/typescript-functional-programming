/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const f = (str: string) => {
  return str.length * 2;
};

const g = (n: number) => {
  return 6 + 1;
};

const h = (x: number) => {
  return x % 3 === 0;
};

const handleError = (e: unknown) => {
  // 사용자에게 에러를 알려주는 통합 함수
  console.log("handleError: " + e);
};

const program = (s: boolean) => {
  console.log(s);
};

const greeting = (name: string) => {
  console.log("Hello, " + name);
};

export const main = () => {
  greeting("World");
  console.log("프로그램이 종료되었습니다.");
};
