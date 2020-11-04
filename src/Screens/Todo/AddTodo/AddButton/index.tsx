import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-content: flex-end;
`;
const ButtonContainer = Styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;
const Icon = Styled.Image``;

interface Props {
    onPress?: () => void;
}

const AddButton = ({ onPress }: Props) => {
    return (
        <Container>
            <ButtonContainer onPress={onPress}>
                <Icon source={require('~/Assets/Images/add.png')} />
            </ButtonContainer>
        </Container>
    );
};
export default AddButton;
//할 일 추가 버튼 컴포넌트는 단순한 이미지 버튼 컴포넌트이다.
//이 컴포넌트는 부모로부터 전달 받은 함수 onPress?:() => void 를 이미지 버튼이 선택 되었을 때 호출할 수 있게 연결함
//할 일 추가 버튼 컴포넌트는 단순한 이미지 버튼 컴포넌트이다.
//이 컴포넌트는 부모로부터 전달 받은 함수 onPress?:() => void 를 이미지 버튼이 선택 되었을 때 호출할 수 있게 연결함