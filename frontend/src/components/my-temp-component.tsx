import React, {useContext} from 'react';
import { Context } from './contextProvider/contextProvider';

export const MyTempComponent = () => {
  const {addToCounter} = useContext(Context);

  const handleButtonClick = () => {
    console.log('calling handleButtonClick')
    addToCounter?.();
  };

  return (
    <button onClick={handleButtonClick}>Click me!</button>
  )
};