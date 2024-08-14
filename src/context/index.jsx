import { createContext, useState } from 'react';

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {

  const [value, setValue] = useState('amara');

  return (
    <QuizContext.Provider value={{ value, setValue }}>
      {children}
    </QuizContext.Provider>
  );
};
