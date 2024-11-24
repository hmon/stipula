export interface Atom<T> {
  get: () => T;
  set: (newState: T) => void;
  subscribe: (fn: (state: T) => void) => () => void;
}
