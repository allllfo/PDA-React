import React, { useEffect ,useState } from 'react'

export default function CountComponent(){
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count+1);
    }

    useEffect(()=>{ //component가 mount되거나, update될때 실행되는 함수
        console.log("데이터 받아오기, 한번만 실행됩니다.");
        return ()=>{
            console.log(`메모리를 잡아먹으면 리소스 해제하는 함수를 return해 줘야 합니다.`) // return에는 리소스 해제해주는 부분을 작성해줘야 한다.
        }
    }, []);
    useEffect(()=>{
        console.log("카운트가 증가할 때마다 실행");
    }, [])
    return(
        <div>
            <div>{count}</div>
            <button onClick = {addCount}> 1 증가</button>
        </div>
    )
}