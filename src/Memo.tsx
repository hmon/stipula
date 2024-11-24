import React from 'react'
import { Atom } from './types'
import { useAtom } from './useAtom'

interface MemoProps<T> {
  atom: Atom<T>;
  children: (value: T) => React.ReactNode;
}

export const Memo = <T,>(props: MemoProps<T>) => {
  const [value] = useAtom(props.atom);

  return <>{props.children(value)}</>;
};
