import { Atom } from './types'

export const createAtom = <T, >(initialState: T): Atom<T> => {
  const eventEmitter = new EventTarget();
  let state = initialState;

  const get = () => state;

  const set = (newState: T) => {
    state = newState;
    eventEmitter.dispatchEvent(new CustomEvent("change", { detail: state }));
  };

  const subscribe = (fn: (state: T) => void) => {
    const handler = (e: any) => fn(e.detail);
    eventEmitter.addEventListener("change", handler);
    return () => {
      eventEmitter.removeEventListener("change", handler);
    };
  };

  return {
    get,
    set,
    subscribe
  };
};
