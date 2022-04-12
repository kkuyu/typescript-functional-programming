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

// undefined 체크
export const fromUndefined = <A>(a: A | undefined): Option<A> => {
  if (a === undefined) return none();
  return some(a);
};

// 값이 없으면 지정된 값을 사용하고
// 값이 있다면 해당 값을 사용한다.
export const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
  if (isNone(oa)) return defaultValue;
  return oa.value;
};
