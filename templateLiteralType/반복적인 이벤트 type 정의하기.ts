type EventNames = "click" | "doubleClick" | "mouseDown" | "mouseUp";

// CapitalizedEventNames = 'Click' | 'DoubleClick' | ...;
type CapitalizedEventNames = Capitalize<EventNames>;

// type HandlerNames = 'onClick' | 'onDoubleClick' | 'onMouseDown' | 'onMouseUp';
type HandlerNames = `on${CapitalizedEventNames}`;

type Handlers = {
  [H in HandlerNames]: (event: Event) => void;
};

type MyElement = Handlers & {
  addEventListener: (
    eventName: EventNames,
    handler: (event: Event) => void
  ) => void;
};
