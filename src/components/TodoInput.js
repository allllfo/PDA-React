import React, {useState} from 'react';
import ShowToDo from './ShowToDo'

export default function TodoInput(){

    const [toDo, setToDo] = useState("");
    
    const [toDoList, setToDoList] = useState([]); 

    const handleOnClick = () => {
        setToDoList((prevState) => [...prevState, toDo]);// 
        setToDo('');
      };

    const handleToDoOnChange = (event) =>{
        setToDo(event.target.value);
        //console.log(toDo+"+"+event.target.value); toDO == evet.target.value
    }

    return (
            <div>
                <h1 style={{backgroundColor: "skyblue"}}>할일을 입력하세요!</h1>
                <div>
                    <input type="text" name="toDoInput" onChange={handleToDoOnChange}/>
                    <button onClick={handleOnClick}>입력</button>
                </div>
                <div>
                 <ShowToDo toDo={toDo} toDoList={toDoList} /> 
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


    // const handleOnChange = (event) =>{
        // console.log(event.target.name + ":::"+ event.target.value); //event.target.name == toDo , event.target == objectHTMLInputElement
    // }
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