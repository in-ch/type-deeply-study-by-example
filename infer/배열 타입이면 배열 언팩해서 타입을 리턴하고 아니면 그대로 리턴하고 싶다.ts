type UnpackedArray<T> = T extends (infer U)[] ? U : T;

type A0 = string[];
type B0 = string;
type C0 = null;

type UnpackedA0 = UnpackedArray<A0>;
type UnpackedB0 = UnpackedArray<B0>;
type UnpackedC0 = UnpackedArray<C0>;
