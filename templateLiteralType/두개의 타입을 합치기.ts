type Concat<S1 extends string, S2 extends string> = `${S1}, ${S2}`;

type T = Concat<"Hello", "World">;
