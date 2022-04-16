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

const f = (str: string): Promise<number> =>
  new Promise((resolve, reject) => {
    if (str === "") {
      reject("빈 문자열은 입력할 수 없습니다.");
      return;
    }
    setTimeout(() => {
      console.log("f:", str);
      resolve(str.length * 2);
    }, 500);
  });

const g = (n: number): Promise<number> =>
  new Promise((resolve, reject) => {
    if (n === 6) {
      reject("6은 입력할 수 없습니다.");
      return;
    }
    setTimeout(() => {
      console.log("g:", n);
      resolve(6 + 1);
    }, 500);
  });

const h = (x: number): Promise<boolean> =>
  new Promise((resolve, reject) => {
    if (x === 5) {
      reject("5는 입력할 수 없습니다.");
      return;
    }
    setTimeout(() => {
      console.log("h:", x);
      resolve(x % 3 === 0);
    }, 500);
  });

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
  // const a = f("abc");
  // const b = a.then((a_) => g(a_));
  // const c = b.then((b_) => h(b_));
  // const result = c.then((c_) => program(c_));
  // result.catch(handleError);

  // 생성 즉시 실행, 값의 전달만 분리 됨
  f("abc").then(g).then(h).then(program).catch(handleError);

  greeting("World");
  console.log("프로그램이 종료되었습니다.");
};
