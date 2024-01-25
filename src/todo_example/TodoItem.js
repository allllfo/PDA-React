import React, {useEffect, useState} from "react";

export default function TodoItem({todo, remove, update}){ //delete가 예약어라 이름을 remove로 바꿈
    const [mode, setMode] = useState('normal')

    const [inputText, setInputText] = useState('');
    useEffect(()=>{
        setInputText(todo.title)
    }, [todo])

    return (
        <li 
            style={{backgroundColor: todo.color}}>

            <div>
            {mode==='update' ? <input value={inputText} type="text"  />:
             mode==='normal' ? todo.title : null}

            </div>

            <div onClick={(e)=>{ // 온클릭은 이벤트를 받기를 원하므로, 이렇게 전달해줘야 한다.
                remove()//삭제되는 코드 
            }} style={{cursor:'pointer'}}>
                X
            </div>

            <div onClick={(e)=>{
                if (mode ==='normal'){
                    setMode('update');
                }else{
                    update();
                    setMode('normal');
                }
            }}>
                수정
            </div>
        </li>
      )
}

 {/* 얘는 온클릭에 리무브의 함수 호출 결과를 전달해준것.
            <div onClick = {remove()}>
                X
            </div>
            */}

            {/* 얘는 함수 데이터 타입을 전달해준것.????
            <div onClick = remove>
                X
            </div>
            */}