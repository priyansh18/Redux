import { BUG_ADDED, BUG_RESOLVED } from "./actionTypes";

export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description,
    },
  };
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
    },
  };
}
