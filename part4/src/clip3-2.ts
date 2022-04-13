const delivery = (present: string, from: string, to: string) => {
  return `
    보내는 물건: ${present}
    보내는 사람: ${from}
    받는 사람: ${to}
  `;
};

const curry = <A, B, C, D>(f: (a: A, b: B, c: C) => D) => {
  return (a: A) => (b: B) => (c: C) => f(a, b, c);
};

const curryDelivery = curry(delivery);

export const main = () => {
  console.clear();
  const morePresent = curryDelivery("상품권")("엄마");
  console.log(morePresent("아들"));
  console.log(morePresent("딸"));
  console.log(morePresent("할머니"));
};
