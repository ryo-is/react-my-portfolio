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

  return (
    <div className="flex items-center justify-center h-full">
      <p>{count}</p>
      <Button onClick={increment} buttonText="increment"></Button>
      <Button onClick={decrement} buttonText="decrement"></Button>
    </div>
  );
};
