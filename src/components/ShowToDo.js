import React from "react";

export default function ShowTodo(props) {
    console.log(props);// props : todo랑, toDoList가 나옴
    return(
        <div>
        {props.toDoList.map((toDo) => (
          <div key={toDo}>{toDo}</div> // Each child in a list should have a unique "key" prop해결방법
        ))}
      </div>
    );
}

