export type Some<A> = {
  readonly _tag: "Some";
  readonly value: A;
};

export type None = {
  readonly _tag: "None";
};

export type Option<A> = Some<A> | None;

// _tag를 항상 적어줘야해서 불편함
const n1: Option<number> = { _tag: "Some", value: 1 };

// 타입 쉽게 만들어주는 함수 구현
export const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });
export const none = (): Option<never> => ({ _tag: "None" });

// 타입을 확인하는 함수 구현
export const isSome = <A>(oa: Option<A>): oa is Some<A> => oa._tag === "Some";
export const isNone = <A>(oa: Option<A>): oa is None => oa._tag === "None";
