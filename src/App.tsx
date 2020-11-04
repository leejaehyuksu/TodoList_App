import React from 'react';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/Context/TodoListContext';

import Todo from './Screens/Todo';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};
//앞에서 만든  Context에서 프로바이더 컴포넌트를 불러와, 최상단 공통 부모 컴포넌트에 사용하였다,
//이로써 App.tsx 컴포넌트를 부모로 하는 모든 컴포넌트에서 할 일 리스트의 Context를 사용할 수 있다.
export default App;
