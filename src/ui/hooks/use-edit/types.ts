import type { PlacedTask } from "../../../types";

export enum EditMode {
  DRAG = "DRAG",
  DRAG_AND_SHIFT_OTHERS = "DRAG_AND_SHIFT_OTHERS",
  DRAG_AND_RESIZE_NEXT = "DRAG_AND_RESIZE_NEXT",
  RESIZE = "RESIZE",
  RESIZE_AND_SHIFT_OTHERS = "RESIZE_AND_SHIFT_OTHERS",
  RESIZE_AND_RESIZE_NEXT = "RESIZE_AND_RESIZE_NEXT",
  CREATE = "CREATE",
  CREATE_AND_SHIFT_OTHERS = "CREATE_AND_SHIFT_OTHERS",
  CREATE_AND_RESIZE_NEXT = "CREATE_AND_RESIZE_NEXT",
  SCHEDULE = "SCHEDULE",
}

export interface EditOperation {
  task: PlacedTask;
  mode: EditMode;
}
