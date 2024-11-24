# Stipula 🌟

**Stipula, cute react state management** 🐱

Stipula is a simple React state management library that uses observables to manage state. It is designed to be lightweight and easy to use, making state management in React applications a breeze. 🚀

## Features ✨

- **Lightweight**: Minimal footprint, easy to integrate.
- **Observable-based**: Uses observables for state management.
- **React Integration**: Seamless integration with React through hooks.
- **Efficient Re-renders**: Provides a `Memo` component for efficient re-renders.
- **TypeScript Support**: Fully typed for better developer experience.
- **Simple API**: Easy-to-use API for managing state.

## Installation 📦

To install Stipula, use npm:

```bash
npm install stipula
```

## Usage 💡

### Simple usage outside React

Stipula can be used outside of React to manage state with observables.

```jsx
import { createAtom } from 'stipula';

const atom = createAtom({ count: 0 });

const unsubscribe = atom.subscribe((state) => {
  console.log(state);
});

atom.set({ count: atom.get().count + 1 });
atom.set({ count: atom.get().count + 1 });
atom.set({ count: atom.get().count + 1 });

unsubscribe();
```

### Usage with React (useAtom) ⚛️

Stipula integrates seamlessly with React through the `useAtom` hook.

```jsx
import React from 'react';
import { createAtom, useAtom } from 'stipula';

const atom = createAtom(0);

const Counter = () => {
  const [count, setCount] = useAtom(atom);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Usage with Memo 📝

Stipula also provides a `Memo` component for efficient re-renders based on state changes.

```jsx
import React from 'react';
import { createAtom, Memo } from 'stipula';

const atom = createAtom(0);

const Counter = () => {
  return (
    <div>
      <h1><Memo atom={atom}>{(count) => count}</Memo></h1>
      <button onClick={() => atom.set(atom.get() + 1)}>Increment</button>
    </div>
  );
}
```

## API 📚

### `createAtom(initialState)`

Creates a new atom with the given initial state.

- `initialState`: The initial state of the atom.

### `useAtom(atom)`

A React hook that subscribes to the given atom and returns the current state and a setter function.

- `atom`: The atom to subscribe to.

### `Memo`

A React component that subscribes to an atom and renders its children with the current state.

- `atom`: The atom to subscribe to.
- `children`: A function that receives the current state and returns a React element.

## License

Stipula is licensed under the MIT License.
