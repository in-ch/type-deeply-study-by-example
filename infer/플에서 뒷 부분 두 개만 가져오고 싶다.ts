type Tail<T> = T extends [unknown, ...infer U] ? U : [];

type AA = Tail<[string, boolean, number]>;
