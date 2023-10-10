import React, { createContext, useState } from 'react';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputs, setInput] = useState([]);

  const addInput = (input) => {
    setInput([...inputs, input]);
  };

  const removeInput = (id) => {
    setInput(inputs.filter((input) => input.id !== id));
  };

  return (
    
    <InputContext.Provider value={{ inputs, addInput, removeInput }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
