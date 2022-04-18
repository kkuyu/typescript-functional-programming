/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const pipeFunctions =
  <A, B, C>(f: (a: A) => B, g: (b: B) => C) =>
  (a: A): C => {
    return g(f(a));
  };

type Observer<A> = (a: A) => void;
type Observable<A> = (subscribe: Observer<A>) => void;

const map =
  <A, B>(f: (a: A) => B) =>
  (source: Observable<A>): Observable<B> => {
    return (subscribe) => {
      source((a) => {
        const b = f(a);
        subscribe(b);
      });
    };
  };

const filter =
  <A>(pred: (a: A) => boolean) =>
  (source: Observable<A>): Observable<A> => {
    return (subscribe) => {
      source((a) => {
        if (pred(a)) {
          subscribe(a);
        }
      });
    };
  };

export const main = () => {};
