export type SelfExclude<T, U> = T extends U ? never : T;
