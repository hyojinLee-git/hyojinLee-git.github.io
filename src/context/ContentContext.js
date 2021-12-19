import React, { useReducer, useContext, createContext } from 'react';
import seoul_garosu from '../db/posts/seoul-garosu.md';
import report_generator from '../db/posts/report-generator.md';
import projects from '../db/projects';

//어뚜카지....
//

const initialState = 'nothing';
const contents = ['', seoul_garosu, report_generator];

const getContent = state => {
  if (!state) return;
  const result = projects.find(project => project.id === Number(state));
  if (result) {
    fetch(contents[Number(state)])
      .then(res => res.text())
      .then(post => {
        return post;
      })
      .catch(err => {
        throw new Error(err);
      });
  } else {
    return;
  }
};

//최적화를 위해 분리해서 context 생성
const ContentContext = createContext();
const ContentDispatchContext = createContext();
const PostContext = createContext();

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
  const post = getContent(state);

  return (
    <ContentContext.Provider value={state}>
      <ContentDispatchContext.Provider value={dispatch}>
        <PostContext.Provider value={post}>{children}</PostContext.Provider>
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

export const usePost = () => {
  return useContext(PostContext);
};
