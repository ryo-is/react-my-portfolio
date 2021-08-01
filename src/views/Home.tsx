import React, { useState } from 'react';
import { Button } from '../components/Button';

export const Home = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const increment = (): void => {
    setCount((prev) => prev + 1);
  };
  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };
  const reset = (): void => {
    setCount(0);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col text-center">
        <div className="mb-2">{count}</div>
        <Button onClick={increment} buttonText="increment"></Button>
        <Button onClick={decrement} buttonText="decrement"></Button>
        <Button onClick={reset} buttonText="reset"></Button>
      </div>
    </div>
  );
};
