import React from 'react';
import { Platform } from 'react-native';
import Styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: flex-end;
`;
//키보드가 활성화 되면서 입력창을 가리는 문제를 해결하기 위한 컴포넌트로써 이곳에서는 ios만 padding 옵션을 줌

interface Props {
    hideTodoInput: () => void;
}

const TodoInput = ({ hideTodoInput }: Props) => {
    ////할 일 입력 컴포넌트는 화면을 어둡게 처리할 Background 컴포넌트와, 할 일 텍스트를 입력받을 TextInput 컴포넌트를 가지고 있다.
    //화면에 표시된 TodoInput 컴포넌트를 숨기기 위해 부모 컴포넌트인 AddTodo 컴포넌트로부터 hideToInput 함수를 Props를 통해 전달 받음
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Background onPress={hideTodoInput} />
            <TextInput hideTodoInput={hideTodoInput} />
        </Container>
    );
    //Background 컴포넌트를 선택했을 때 TextInput 컴포넌트에서 텍스트 입력이 완료되었을 떄 호출하여 컴포넌트를 숨길 예정이다.
};
export default TodoInput;

