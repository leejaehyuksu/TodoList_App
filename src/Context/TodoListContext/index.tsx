import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//createContext로 Context를 생성하고 userstate로 생성한 State 데이터를 Context안에 저장할 예정
//useState로 생성한 State를 저장함으로써 Context 데이터를 수정할 수 있다.

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoListContext>({
    todoList: [],
    addTodoList: (todo: string): void => { },
    removeTodoList: (index: number): void => { },
});
//createContext 함수에 초기값을 할당하여 Context를 생성할 수 있다.
//이때 @types/index.d.ts에 정의한 타입을 사용하여 Context의 데이터 타입을 지정해줌
//할일 리스트 앱의 Context를 생성하기 위해 createContext 함수의 초기 값으로 문자열 배열인
//todoList와 todoList에 데이터를 추가하기 위한 addToDoList,데이터 삭제를 위한removeToDoList 할당
//함수 초기값은 빈 배열로 대입해주었다. 실제구현은 Context의 프로바이더 컴포넌트에서 할예정

const TodoListContextProvider = ({ children }: Props) => {
    //Context를 사용하기 위해서는 우선 공통 부모 컴포넌트에서 Context의 프로바이더를 사용한다.
    //공통 부모 컴포넌트에서 프로바이더를 사용하기 위해서는 Context의 프로바이터 컴포넌트를 만들고 공통 부모 컴포넌트의 부모 컴포넌트로서 사용한다.
    //TodoListContextProvider은 Context의 프로바이더 컴포넌트로서 공통 부모 컴포넌트의 부모 컴포넌트가 될 예정 
    //따라서 자식컴포넌트 children 매개변수를 통해 전달받음 
    //마지막부분에 이렇게 전달받은 자식 컴포넌트는 createContext로 생성한 Context의 프로바이더인 TodoListContext.Provider의 하위에 위치하도록함
    const [todoList, setTodoList] = useState<Array<string>>([]);
    //Context를 사용하기 위해 만든 프로바이더 컴포넌트도 리액트 네이티브 컴포넌트이므로, 컴포넌트 안에서 수정가능한 데이터를
    //사용하기 위해서는 useState를 사용해야한다.
    //우리가 만들 Context 데이터는 문자열 배열의 할 일 리스트이고 이 Context데이터에 데이터를 추가,삭제한다
    //Context프로바이더 컴포넌트에서 useState를 사용하여 문자열 배열(Array<String>)의 할 일 리스트인 todoList를 선언하고
    //데어터를 serTodoList 함수를 통해 추가하거나 삭제하여 Context 데이터를 다룰예정
    const addTodoList = (todo: string): void => {
        const list = [...todoList, todo];
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };
    //할일 리스트에 할일을 추가하기 위한 함수 useState로 만든 todoList는 수정할 수 없는 불변값
    //새로운 list변수를 생성하여 todoList의 모든 데이터를 넣고(...todoList) 매개변수로 전달받은 새로운 데이터 추가(todo)
    //이렇게 추가된 데이터를 setTodoList를 통해 State 값을 변경해 줌
    const removeTodoList = (index: number): void => {
        let list = [...todoList];
        list.splice(index, 1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };
    //삭제하고자 하는 할 일 리스트의 index를 전달하여 할 일을 삭제
    //할 일 List 데이터인 todoList는 State 값으므로 직접 변경이 불가능하다.
    //따라서 todoList를 복사하여 새로울 배열 생성
    //새롭게 생성된 배열에서 전달받은 매개변수를 이용하여 삭제하고자 하는 데이터를 제거하고,setTodoList를 사용하여 State에 제거된 데이터를 저장함
    //마지막으로 AsyncStorage를 사용하여 물리적으로 저장된 값도 업데이트
    const initData = async () => {
        try {
            const list = await AsyncStorage.getItem('todoList');
            if (list !== null) {
                setTodoList(JSON.parse(list)); //AsyncStorage에 저장된 값은 문자열이므로 이 데이터를 JSON.parse함수를 사용하여 문자열 배열로 변경 
            }
        } catch (e) {
            console.log(e);
        }
    };
    //initData 함수는 앱이 시작될 AsyncStorage에 저장된 데이터를 불러와,Context의 값을 초기화하기 위한 함수이다.
    //AsyncStorage의 setItem과 getItem은 모두 Promise함수이다.
    //setItem을 한 후, 특정한 작업을 하지 않았기 때문에 비동기로 데이터를 처리했다. 하지만 여기에서는 값을 바로 초기화 하기 위해
    //await AsyncStorage를 사용하여 동기화 처리

    useEffect(() => {
        initData();
    }, []);
    //useEffect의 첫 번째 매개변수로 함수를 전달하였고, 그 함수에서 데이터 초기화 함수를 호출
    //두번째 매개변수에는 빈 배열을 전달하여, 이 useEffect가 componentDidMount와 같은 역할을 수행하도록 함
    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodoList,
                removeTodoList,
            }}>
            {children}
        </TodoListContext.Provider>
    );
};


export { TodoListContextProvider, TodoListContext };
//Context를 제공하기 위해 프로바이더 컴포넌트와 Context를 내보냄
