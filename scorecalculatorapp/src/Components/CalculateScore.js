
import React from 'react';
import './myStyle.css';
const percentToDecimal= (decimal)=>{
    return(decimal.toFixed(2)+'%')
}

const calcScore= (total,goal)=>{
    return percentToDecimal(total/goal)
}
const calculateScore= ({Name,School,Total,Goal}) =>{
    return(
        <div className="formatstyle">
            <h1><font color="Brown">Student Details:</font></h1>
            <div className="name">
                <b><span>Name:</span></b>
                <span>{Name}</span>
            </div>
            <div className="school">
                <b><span>School:</span></b>
                <span>{School}</span>
            </div>
            <div className="total">
                <b><span>Total:</span></b>
                <span>{Total}</span>
                <span>Marks</span>
            </div>
            <div className="score">
                <b><span>Score:</span></b>
                <span>{calcScore(Total,Goal)}</span>
            </div>
        </div>
    )
}
export default calculateScore;


