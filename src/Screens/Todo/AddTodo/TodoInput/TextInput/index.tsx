import React, { useContext } from 'react';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';

const Input = Styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #FFF;
  padding: 0px 8px;
`;

interface Props {
    hideTodoInput: () => void;
}

const TextInput = ({ hideTodoInput }: Props) => {
    const { addTodoList } = useContext<ITodoListContext>(TodoListContext);
    return (
        <Input
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="할일을 입력하세요!"
            returnKeyType="done"
            onSubmitEditing={({ nativeEvent }) => {
                addTodoList(nativeEvent.text);
                hideTodoInput();
            }}
        />
    );
};
export default TextInput;
//TextInput 컴포넌트는 useContext를 사용하여 Context를 사용하도록 설정하였다.
//useContext의 초기값으로 우리가 만든 TodoListContext를 전달하고, 전역 데이터인 할 일 리스트에
//데이터를 추가하기 위해 addTodoList 함수를 할당받음
//이렇게 할당받은 addTodoList 함수는 리액트네이티브 컴포넌트인 TextInput의 onSubmitEditing 함수와 연결
//onSubmitEditing 함수는 키보드의 '완료' 버튼을 눌렀을 시 호출되는 TextInput함수로서 이 함수에서 Context에
//데이터를 저장하고 TodoInput 컴포넌트를 숨기도록 hideToInput함수를 호출
