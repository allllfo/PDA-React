import React, { useState, useCallback } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';

const COLOR_MAP = [{
  color: 'red',
}, {
  color: 'blue',
}, {
  color: 'white'
}, {
  color: 'yellow'
}]

export default function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
  const [incrementCount, setIncrementCount] = useState(3); //생성될때마다 하나씩 추가, 기본값 두개 넣어놨으므로 3부터 시작

  const [todoList, setTodoList] = useState([{
    id : 1,
    title: 'todo-1',
    color: 'red'
  }, {
    id :2,
    title: 'todo-2',
    color: 'blue'
  }]);

  const deleteTodo = useCallback((todoId) =>{
    setTodoList(prev=>{
        return prev.filter((todo) =>{
            return todo.id !== todoId
        })
    })

    // setTodoList(todoList.filter(todo=> {
    //     return todoid !== todoId
    // })) 이렇게 되면, 밑에 디펜던시에 setTodoList, todoList를 넣어줘야함 => 함수에 대한 정의가 빈번해진다. 따라서 위의 코드가 더 좋다.

  }, [setTodoList]) // 바뀔 게 없으므로 얘만 넣어줌 , 성능을 고려한다면 최대한 재정의가 안되게 짜야한다.

  return (
    <div className="todo-app">
      <div>
        <div>TodoApp</div>
      </div>
      
      <div>
        <input type="text" value={inputText} style={{backgroundColor:activeColor}} onChange={e=>{
          setInputText(e.target.value);
        }} />
        <button onClick={()=>{
          const item = {
            id: incrementCount,
            title: inputText,
            color: activeColor
          };
          setTodoList(prev=>prev.concat(item))
          setIncrementCount(prev=>(prev+1));// count를 1씩 증가
        }}>제출</button>
      </div>

      <div>
        {COLOR_MAP.map(elem=>{
          return (
            <div onClick={()=>{
              setActiveColor(elem.color);
            }} key={elem.color} style={{width:20, height:20, 
                        backgroundColor: elem.color, border: '1px solid',
                        borderRadius: 5, borderColor: 'e9e9e9'
                        }}>
              
            </div>
          )
        })}
      </div>
      
      <div>
        {/* {todoList.map((todo, idx)=>{
          return (
            <div key={todo.id} style={{backgroundColor: todo.color}}> 
              {todo.title}
            </div>
          )
        })} */}
        <TodoList todoList={todoList} onDelete={deleteTodo}/>    {/* props로 저장 */}
      </div>
    </div>
  )
}

//저기 Key값을 Index로 넣어준 경우에, 2번에 있는 Index를 뺏을때, 하나만 뺴는게 아니라 전체를 다 계산해서 하므로,
//index를 써도 문제가 있는 경우가 많음. 


