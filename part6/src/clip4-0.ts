/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */
import * as T from "./try";

const f = (str: string): T.Try<string, number> => {
  if (str === "") {
    return T.failed("빈 문자열은 입력할 수 없습니다.");
  }
  return T.success(str.length * 2);
};

const g = (n: number): T.Try<string, number> => {
  if (n === 6) {
    return T.failed("6은 입력할 수 없습니다.");
  }
  return T.success(n + 1);
};

const h = (x: number): T.Try<string, boolean> => {
  if (x === 5) {
    return T.failed("5는 입력할 수 없습니다.");
  }
  return T.success(x % 3 === 0);
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
