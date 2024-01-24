import React, {useEffect, useState} from 'react'

export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);

    
    // useEffect(()=>{
        // const timeoutId = setInterval(()=> {
            // setShowText(showText=>!showText);
        // }, 1000)
        // return () => {clearInterval(timeoutId)} // clearInterval이 뭐라고..?
    // }, [])

    return (
        <div>
            <button onClick={()=>{
                setShowText(!showText);
            }}>클릭</button>
            {showText? text: null}
        </div>
    )
}