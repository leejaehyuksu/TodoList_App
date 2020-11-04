import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableWithoutFeedback`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BlackBackground = Styled.View`
  background-color: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
`;

interface Props {
    onPress: () => void;
}

const Background = ({ onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <BlackBackground />
        </Container>
    );
};
export default Background;

//단순히 검은색 배경의 투명도를 가지는 뷰 컴포넌트를 화면에 표시, 또한 부모 컴포넌트로부터 전달받은 Props의 함수를 통해
// onPress:() => void 해당 뷰 컴포넌트를 선택하면, TodoInput 컴포넌트를 숨기도록 설정
