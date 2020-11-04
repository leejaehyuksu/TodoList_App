import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;
  background-color: #FFF;
  margin:4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;
const Label = Styled.Text`
  flex: 1;
`;
const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props {
    text: string;
    onDelete: () => void;
}

const TodoItem = ({ text, onDelete }: Props) => {
    return (
        <Container>
            <Label>{text}</Label>
            <DeleteButton onPress={onDelete}>
                <Icon source={require('~/Assets/Images/remove.png')} />
            </DeleteButton>
        </Container>
    );
};
export default TodoItem;
//이 컴포넌트는 부모 컴포넌트로부터 할 일 데이터 하나(text:string)를 전달받아 화면에 표시한다.
//또한 해당 할 일 데이터를 지우기 위한 삭제 함수 onDelete: () => void 를 전달받아 삭제아이콘 선택시 데이터 삭제
//데이터 표시하기 위한 컴포넌트는 모두 제작!!!
