import React, {useState, useEffect} from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todoList, onDelete}) {
    //const [todoList, setTodoList] = useState(props.todoList); // 초기값을 props에서 받아온 투두 리스트로 두고 싶을 때 이렇게 하면 잘 작동이 안함.

    //const [todoList, setTodoList] = useState([]); -> 이렇게 하면 추가되는 코드는 TodoApp.js에서 관리하고, 그로 인해 추가되는 것들은TodoList에서 관리한다는 것은 말이 안된다. 즉, 단방향은 가능하지만, 양방향은 힘들다. 부모가 자식컴포넌트에게 값을 전달해주는건 가능하나, 그 반대는 순수 리액트에서는 불가능하다.
    // useEffect(()=>{ // 초기 값이 들어감. 강사님은 props하고 value를 중복이라는 생각떄문에 굳이 일치시키진 않음. 흔한 패턴은 아니다.
    //     setTodolist(todoList);//.
    // }, [])

    return(
        <div>
            <h3>TodoList</h3>
            <ul>
            {todoList.map((todo, idx)=>{
          return (
            <TodoItem key={todo.id} todo={todo} remove={()=>{onDelete(todo.id)}}/> //항상 위에서 아래로 내려줄 수 밖에 없음 따라서 todoApp에서, list로, list에서 item으로
          )
        })}
            </ul>
        </div>
    )
}