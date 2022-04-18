/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const pipeFunctions =
  <A, B, C>(f: (a: A) => B, g: (b: B) => C) =>
  (a: A): C => {
    return g(f(a));
  };

type Observer<A> = (a: A) => void;
type Observable<A> = (subscribe: Observer<A>) => void;

export const main = () => {};
