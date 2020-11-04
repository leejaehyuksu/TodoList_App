import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;
interface Props { }

const TodoList = ({ }: Props) => {
    const { todoList, removeTodoList } = useContext<ITodoListContext>(
        TodoListContext
    );
    return (
        <Container
            data={todoList}
            keyExtractor={(item, index) => {
                return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />}
            renderItem={({ item, index }) => (
                <TodoItem
                    text={item as string}
                    onDelete={() => removeTodoList(index)}
                />
            )}
            contentContainerStyle={todoList.length === 0 && { flex: 1 }}
        />
    );
};
export default TodoList;
//TodoList컴포넌트는 TodoListView 컴포넌트에서 실제로 할 일 리스트를 표시하는 컴포넌트
//이 컴포넌트에서는 Context를 사용하여 저장된 할 일 데이터를 화면에 표시
//함수형 컴포넌트에서 Context를 사용하기 위해서는 리액트 훅의 useContext함수를 불러와
//사용하고자 하는 Context를 초기 값으로 설정하고, 해당 Context애서 사용하고자 하는 값들을
//불러와 사용할 수 있다. 
//여기에서는 앞에서 만든 Context인 TodoListContext를 useContext의 초기값으로 설정하였고 TodoListContext의 
//초기 값으로 설정하였고 TodoListContext 안에서 사용하고자 하는 todoList 변수와 remove TodoList함수를 불러옴

//TodoList 컴포넌트는 리액트 네이티브의 리스트 뷰 중 하나인 FlatList 컴포넌트를 사용하여 만들었다 FlatList 컴포넌트는 Props를 전달하여 사용할 수 있다
//스무디책 159page 밑에부분부터 참조할것....