type Success<R> = {
  readonly _tag: "success";
  readonly result: R;
};

type Failed<E> = {
  readonly _tag: "failed";
  readonly error: E;
};

export type Try<E, R> = Failed<E> | Success<R>;

// never: 안쓰는 타입 파라미터가 리턴 타입에서 사용될 때
// unknown: 안쓰는 타입 파라미터가 인자의 타입에서 사용될 때
export const success = <R>(result: R): Try<never, R> => ({
  _tag: "success",
  result,
});

export const failed = <E>(error: E): Try<E, never> => ({
  _tag: "failed",
  error,
});

export const isSuccess = <R>(ta: Try<unknown, R>): ta is Success<R> => {
  return ta._tag === "success";
};

export const isFailed = <E>(ta: Try<E, unknown>): ta is Failed<E> => {
  return ta._tag === "failed";
};

export const getOrElse = <E, R>(ta: Try<E, R>, defaultValue: (e: E) => R): R => {
  // 에러가 있을 경우 에러에 기반하여 기본 값을 결정한다.
  if (isFailed(ta)) return defaultValue(ta.error);
  // 결과가 성공이라면 해당 값을 사용한다.
  return ta.result;
};

export const map = <E, A, B>(ta: Try<E, A>, f: (a: A) => B): Try<E, B> => {
  if (isFailed(ta)) return ta;
  return success(f(ta.result));
};

// Array<T.Try<ParseError, ParsedItem>> => Array<ParsedItem>
export const keepSuccess = <E, R>(tas: Array<Try<E, R>>): Array<R> => {
  const ret = tas.flatMap((ta) => {
    if (isSuccess(ta)) return [ta.result];
    else return [];
  });
  return ret;
};
