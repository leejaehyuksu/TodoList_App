import React, { useState } from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props { }

const AddTodo = ({ }: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    ////UseState를 사용하여 할 일 추가 버튼(AddButton 컴포넌트)을 눌렀을 떄, 할 일을 입력하는 컴포넌트(TodoInput 컴포넌트)를 화면에 표시하기 위해
    //showInput이라는 state를 생성
    return (
        <>
            <AddButton onPress={() => setShowInput(true)} />
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
        </>
    );
    // AddTodo 컴포넌트는 할 일 데이터를 입력받는 TodoInput 컴포넌트와 이 컴포넌트를 표시하기 위한 AddButton 컴포넌트를 가지고 있다.
    //State는 할 일 추가 버튼을 눌렀을 때, 할 일을 입력하는 컴포넌트를 화면에 표시
    //할 일을 입력하는 컴포넌트에서 할 일 입력을 완료하면, 해당 컴포넌트를 숨길 수 있도록 설정
};
export default AddTodo;


