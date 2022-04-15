/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const f = (str: string) => {
  if (str === "") {
    throw new Error("빈 문자열은 입력할 수 없습니다.");
  }
  return str.length * 2;
};

const g = (n: number) => {
  if (n === 6) {
    throw new Error("6은 입력할 수 없습니다.");
  }
  return 6 + 1;
};

const h = (x: number) => {
  if (x === 5) {
    throw new Error("5는 입력할 수 없습니다.");
  }
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
  try {
    const a = "abc";
    const b = f(a);
    const c = g(b);
    const d = h(c);
    program(d);
  } catch (e) {
    handleError(e);
  }

  greeting("World");
  console.log("프로그램이 종료되었습니다.");
};
