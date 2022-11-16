export type SelfNonNullable<T> = T extends undefined | null ? never : T;
