type UnionToIntersection<U> = (
  U extends any ? (arg: U) => void : never
) extends (arg: infer R) => void
  ? R
  : never;

type T = { a: "a" } | { b: "b" };
type TT = UnionToIntersection<T>;

type K = { a: "a" } & { b: "b" };
type KK = UnionToIntersection<K>;
