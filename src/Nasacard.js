import React from "react";


export default function Nasacard (props) {



    return ( 
           
           <div>
           <p> {props.date} </p>

           <p>{props.title}</p>

           <img src = {props.img} alt="Nasa" />
           
           <p>{props.expl}</p>
           
           <p>{props.owner}</p>
          </div>
    )   
}