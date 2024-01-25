import React, {useState} from 'react';
import ShowToDo from './ShowToDo'

//id값을 넣은 객체를 만드는게 낫는지, 아님 id값을 따로 빼서 상태를 따로 관리하는게 낫는지?
//만약 id값을 넣은 객체를 만든다면, Todo에 해야하는지 아니 ToDolist에 해야하는지?
//객체에 넣어서 할때, id값이 변수가 아니라서 id++가 불가능한데, 어떻게 매 데이터가 추가될때마다 id값을 1크게 하는지?

export default function TodoInput(){
    const [idNum, setIdNum] = useState(1);

    // const [toDo, setToDo] = useState({
    //     id: 0,
    //     text : ""
    // });
    const [toDo, setToDo] = useState("");

    const [toDoList, setToDoList] = useState([]); 

    const handleOnClick = () => {
        setToDoList((prevState) => [...prevState, {
            id: idNum,
            toDo
        }]);// 
        //console.log("todolist:"+toDoList);
        setToDo('');
        setIdNum(prev=>prev+1)
      };

    const handleToDoOnChange = (event) =>{
        setToDo(event.target.value);
        //console.log(toDo+"+"+event.target.value); toDO == evet.target.value
    }

    const onDelete = (id) => {
        setToDoList(toDoList.filter(toDoList => toDoList.id !==id));
    }

    return (
            <div>
                <h1 style={{backgroundColor: "skyblue"}}>할일을 입력하세요!</h1>
                <div>
                    <input type="text" name="toDoInput" onChange={handleToDoOnChange}/>
                    <button onClick={handleOnClick}>입력</button>
                </div>
                <div>
                 <ShowToDo toDo={toDo} toDoList={toDoList} onDelete={onDelete} /> 
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