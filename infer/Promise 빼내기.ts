type PromiseUnpacked<T> = T extends Promise<infer U> ? U : T;

type TT = PromiseUnpacked<Promise<string>>;
