import React from 'react';
import Styled from 'styled-components/native';

import TodoListView from './TodoListView';
import AddTodo from './AddTodo';

const Container = Styled.View`
  flex: 1;
`;

interface Props { }

const Todo = ({ }: Props) => {
    return (
        <Container>
            <TodoListView />
            <AddTodo />
        </Container>
    );
};
export default Todo;

//할 일 리스트 앱은 할 일 리스트를 보여줄 TodoListView컴포넌트와 할 일을 추가할 수 있는 AddToDo컴포넌트를 가지고 있다

