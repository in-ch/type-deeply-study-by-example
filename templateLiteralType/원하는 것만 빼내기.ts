type Alignment = "start" | "end";
type InferSide<T> = T extends `${infer R}-${Alignment}` ? R : T;

type T1 = InferSide<"left-start">;
type T2 = InferSide<"left-end">;
