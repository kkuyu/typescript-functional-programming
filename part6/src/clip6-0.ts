/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const f = (str: string) => {
  setTimeout(() => {
    console.log("f:", str);
  }, 500);
  return str.length * 2;
};

const g = (n: number) => {
  setTimeout(() => {
    console.log("g:", n);
  }, 500);
  return 6 + 1;
};

const h = (x: number) => {
  setTimeout(() => {
    console.log("h:", x);
  }, 500);
  return x % 3 === 0;
};

const handleError = (e: unknown) => {
  // 사용자에게 에러를 알려주는 통합 함수
  setTimeout(() => {
    console.log("handleError:", e);
  }, 500);
  console.log("handleError: " + e);
};

const program = (s: boolean) => {
  console.log(s);
};

const greeting = (name: string) => {
  console.log("Hello, " + name);
};

export const main = () => {
  const a = f("test");
  const b = g(a);
  const c = h(b);
  program(c);

  greeting("World");
  console.log("프로그램이 종료되었습니다.");
};
