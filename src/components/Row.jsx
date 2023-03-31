import React from "react";

export default function Row(props){
    return (
        <div className="row">
            <h2 className="query">{props.query}</h2>
            <button className="toggle" onClick={_event => props.handleClick(_event,props.id)}>{props.isOpen ? "x" : "+"}</button>
            {props.isOpen && <p className="answer">{props.answer}</p>}
        </div>
    )
}