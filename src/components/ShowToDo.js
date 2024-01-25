import React from "react";

export default function ShowTodo(props) {
    console.log(props);// props : todo랑, toDoList가 나옴
    return(
        <div>
        {props.toDoList.map((toDo, index) => (
          <div key={toDo} style={{backgroundColor:"pink", height: 40, margin:30}}>
            {toDo} 
            <button style={{margin:10}}>삭제</button>
          </div> 
        )
        )}
      </div>
    );
}

// <button onClick={()=> onRemove(user.id)}>삭제</button>
