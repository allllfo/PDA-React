import React, {useState} from 'react';
import ShowToDo from './ShowToDo'

export default function TodoInput(){

    const [todo, setTodo] = useState("");
    
    const [toDoList, setToDoList] = useState([]); 

    const handleOnClick = () => {
        setToDoList((prevState) => [...prevState, todo]);// 
        setTodo('');
      };

    // const handleOnChange = (event) =>{
        // console.log(event.target.name + ":::"+ event.target.value); //event.target.name == toDo , event.target == objectHTMLInputElement
    // }

    const handleToDoOnChange = (event) =>{
        setTodo(event.target.value);
        //console.log(todo+"+"+event.target.value);
    }
    return (
            <div>
                <h1>할일을 입력하세요!</h1>
                <div>
                    <input type="text" name="toDoInput" onChange={handleToDoOnChange}/>
                    <button onClick={handleOnClick}>입력</button>
                </div>
                <div>
                 <ShowToDo todo={todo} toDoList={toDoList} /> 
             {/* map 반복문 : toDo {} => 리액트는 html, css를 자바스크립트처럼 사용하기 위해 {} */}
             
             </div>
            </div>
    )
}


/*
   <input type="text" 
                placeholder='할일 입력'
                required value={todoInput}
                onChange={onChange}/>
                <button type="submit">입력</button>
                <p>input값: </p>
*/

/*

const handleOnClick = () => {
        const toDoInput = todo;

        setToDoList([...toDoInput]);
        console.log("hh:"+todo);

        setTodo("");
    }
*/

/*
setToDoList((prevState) => {
    return […prevState, todo]
  });
*/