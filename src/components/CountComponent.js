/*
import React, { useEffect ,useState } from 'react'

export default function CountComponent(){
    const [count, setCount] = useState(0)

    /*const addCount = () => {
        setCount(count+1);
    }*/

    // useCallback(()=> {
    //     setCount(count+1);
    // }, [] )// 이렇게 되면,count가 1에서 멈춘다.

    // const addCount = useCallback((count)=>{
    //     setCount(count+1);
    // }, [setCount])// setCount라는 함수가 바뀔때만 재정의하겠다.

    /*
    const onAddCount = useCallback((e)=>{
        setCount(count);
    },[setCount,count])

    useEffect(()=>{ //component가 mount되거나, update될때 실행되는 함수
        console.log("데이터 받아오기, 한번만 실행됩니다."); // 리소스를 점유해줌
        return ()=>{
            console.log(`메모리를 잡아먹으면 리소스 해제하는 함수를 return해 줘야 합니다.`) // return에는 리소스 해제해주는 부분을 작성해줘야 한다. -> 컴포넌트가 없어지거나, useEffect가 다시 실행될때 작동함
        }
    }, []);
    useEffect(()=>{
        console.log("카운트가 증가할 때마다 실행");
    }, [])
    return(
        <div>
            <div>{count}</div>
            <button onClick = {addCount(count+1)}> 1 증가</button>
        </div>
    )
}
*/