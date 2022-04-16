/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

type Async<A> = (ret: (x: A) => void) => void;

const resolve = <A>(a: A): Async<A> => {
  return (ret) => {
    ret(a);
  };
};

const flatMap = <A, B>(a: Async<A>, f: (a: A) => Async<B>): Async<B> => {
  return (ret) => {
    a((a_) => {
      const b = f(a_);
      b((b_) => ret(b_));
    });
  };
};

const map = <A, B>(a: Async<A>, f: (a: A) => B): Async<B> => {
  return flatMap(a, (a_) => resolve(f(a_)));
};

const run = <A>(a: Async<A>) => {
  a(() => {
    return;
  });
};

const f =
  (str: string): Async<number> =>
  (ret) => {
    setTimeout(() => {
      console.log("f:", str);
      ret(str.length * 2);
    }, 500);
  };

const g =
  (n: number): Async<number> =>
  (ret) => {
    setTimeout(() => {
      console.log("g:", n);
      ret(6 + 1);
    }, 500);
  };

const h =
  (x: number): Async<boolean> =>
  (ret) => {
    setTimeout(() => {
      console.log("h:", x);
      ret(x % 3 === 0);
    }, 500);
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
  const a = f("test"); // 값, 계산의 서술
  const b = flatMap(a, (a_) => g(a_)); // 값, 계산의 서술
  const c = flatMap(b, (b_) => h(b_)); // 값, 계산의 서술
  const result = map(c, (c_) => program(c_)); // 값, 계산의 서술
  run(result); // 실행
  run(result); // 실행

  greeting("World");
  console.log("프로그램이 종료되었습니다.");
};
