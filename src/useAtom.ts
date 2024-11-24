import React from 'react'
import { Atom } from './types'

export const useAtom = <T, >(atom: Atom<T>) => {
  const snapshot = React.useSyncExternalStore(
    atom.subscribe,
    () => atom.get()
  );

  return [snapshot, atom.set] as const;
};
