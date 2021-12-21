import React, { useReducer, useContext, createContext } from 'react';

const initialState = 'nothing';

//최적화를 위해 분리해서 context 생성
const ContentContext = createContext();
const ContentDispatchContext = createContext();

//리듀서 함수
const getContentReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTENT':
      return action.id;
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
};

export const ContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(getContentReducer, initialState);

  return (
    <ContentContext.Provider value={state}>
      <ContentDispatchContext.Provider value={dispatch}>
        {children}
      </ContentDispatchContext.Provider>
    </ContentContext.Provider>
  );
};

//custom Hook
export const useContent = () => {
  const context = useContext(ContentContext);
  //   if (!context) {
  //     throw new Error('Cannot find provider');
  //   }
  return context;
};

export const useContentDispatch = () => {
  return useContext(ContentDispatchContext);
};
