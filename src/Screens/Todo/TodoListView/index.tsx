import React from 'react';
import Styled from 'styled-components/native';

import Header from './Header';
import TodoList from './TodoList';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

interface Props { }

const TodoListView = ({ }: Props) => {
    return (
        <Container>
            <Header />
            <TodoList />
        </Container>
    );
};
export default TodoListView;

//단순히 앱 이름을 표시하기 위한 Header 컴포넌트와 할 일 리스트를 표시할 ToList컴포넌트를 가지고 있다.
