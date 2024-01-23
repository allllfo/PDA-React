import React from 'react'

export default function CaptionImage(props){
    return(
        <div style ={{width: '400px', backgroundColor: 'blue'}}>
            <img src={props.imgUrl} alt={props.cation}/>
            <p>{props.cation}</p>
        </div>
    )
}