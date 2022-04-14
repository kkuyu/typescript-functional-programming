console.clear();

const tenDivideBy = (n: number): number => {
  if (n === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  return 10 / n;
};

const test = () => {
  try {
    const a = tenDivideBy(0);
    return a;
  } catch (e) {
    return 1;
  }
};

const test2 = () => {
  const b = tenDivideBy(0);
  try {
    return b;
  } catch (e) {
    return 1;
  }
};

export const main = () => {
  const x = test();
  console.log(x); // 1
  console.log("프로그램이 종료 되었습니다."); // 실행O

  const y = test2(); // Error: 0으로 나눌 수 없습니다.
  console.log(y); // 실행X
  console.log("프로그램이 종료 되었습니다."); // 실행X
};
