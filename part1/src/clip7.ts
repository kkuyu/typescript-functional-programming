// import { getPrice, isExpensive } from "./clip6";

// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => {
  return n;
};

// 문자열을 그대로 돌려주는 함수
const idString = (s: string) => {
  return s;
};

// boolean값을 그대로 돌려주는 함수
const idBoolean = (b: boolean) => {
  return b;
};

// 어떤 타입의 값이라도 그대로 돌려주는 함수
// 타입 매개변수
const id = <T>(x: T) => {
  return x;
};

// 주석을 제거하면 에러 발생
// type T1 = Array;

type T2 = Array<string>;

const compose =
  <A, B, C>(g: (y: B) => C, f: (x: A) => B) =>
  (x: A) => {
    return g(f(x));
  };

// compose 함수의 원래 타입
// <A, B, C>(g: (y: B) => C, f: (x: A) => B) => (x: A) => C

// 매개변수를 지워서 단순하게 표기
// <A, B, C>((B) => C, (A) => B) => (A) => C

// 합성 함수 작성
const composeA = (g, f) => (x) => {
  return g(f(x));
};

// 타입 정의: x
const composeB = (g, f) => (x: string) => {
  return g(f(x));
};

// 타입 정의: f
const composeC = (g, f: (s: string) => number | undefined) => (x: string) => {
  return g(f(x));
};

// 타입 정의: g
const composeD = (g: (y: number | undefined) => boolean, f: (s: string) => number | undefined) => (x: string) => {
  return g(f(x));
};

// 타입 일반화: x
const composeE =
  <A>(g: (y: number | undefined) => boolean, f: (s: A) => number | undefined) =>
  (x: A) => {
    return g(f(x));
  };

// 타입 일반화: f
const composeF =
  <A, B>(g: (y: B) => boolean, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };

// 타입 일반화: g
const composeG =
  <A, B, C>(g: (y: B) => C, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };
