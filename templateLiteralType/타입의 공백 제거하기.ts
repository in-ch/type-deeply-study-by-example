type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;
type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;

type A0 = " TYPE ";
type A1 = TrimRight<A0>;
type A2 = TrimLeft<A0>;
type A3 = TrimRight<TrimLeft<A0>>;
