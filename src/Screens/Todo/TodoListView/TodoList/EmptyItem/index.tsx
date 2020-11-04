import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Label = Styled.Text``;
interface Props { }

const EmptyItem = ({ }: Props) => {
    return (
        <Container>
            <Label>하단에 "+" 버튼을 눌러 새로운 할일을 등록해 보세요.</Label>
        </Container>
    );
};
export default EmptyItem;
//이 컴포넌트는 데이터가 없을 때 데이터를 추가하도록 안내하는 문구를 단순히 가운데 정렬로 표시했다.