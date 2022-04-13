import * as O from "./option";

export const curry =
  <A, B, C>(f: (a: A, b: B) => C) =>
  (a: A) =>
  (b: B): C =>
    f(a, b);

export const flip =
  <A, B, C>(f: (a: A, b: B) => C) =>
  (b: B, a: A): C =>
    f(a, b);

// Array<A> == A[]
// map :: (Array<A>, (A => B)) => Array<B>
export const map = <A, B>(array: Array<A>, f: (a: A) => B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value));
  }
  return result;
};

export const main = () => {
  const numbers = [1, 2, 3];
  const isEven = (x: number) => x % 2 === 0;

  console.log(map(numbers, isEven));

  // curriedMap :: Array<A> => ((A => B) => Array<B>)
  const curriedMap = curry(map);
  console.log(curriedMap(numbers)(isEven));

  // map :: Array<A> ~> (A => B) => Array<B>
  console.log(numbers.map(isEven));

  // map_ :: (A => B) => (Array<A> => Array<B>)
  const map_ = curry(flip(map));
  console.log(map_(isEven)(numbers));

  // isEven :: number => boolean
  // mapIsEven :: Array<number> => Array<boolean>
  const mapIsEven = map_(isEven);

  console.log(isEven(42));
  console.log(isEven(7));

  console.log(mapIsEven(numbers));
  console.log(mapIsEven([]));
  console.log(mapIsEven([42]));

  const omap = curry(flip(O.map));

  // optionIsEven :: Option<number> => Option<boolean>
  const optionIsEven = omap(isEven);

  console.log(optionIsEven(O.some(42)));
  console.log(optionIsEven(O.none()));
};
