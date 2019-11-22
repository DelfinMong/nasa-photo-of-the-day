import React , { useState, useEffect}from "react";
import axios from "axios";

import Nasacard from "./Nasacard";


export default function Nasa () {

    const [info, setInfo] = useState([]);

 
 useEffect (() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=mLQrjdRpmQbUvP6nQNEQFTLHONJWW0kCj09HxieR")
           .then(response => {
             setInfo(response.data)
             console.log('Delfin:', response.data)
           })
           .catch(error => console.log(error))
      }, []);
 
      console.log(info);
    
      
 
 return (
    
        <div>
           <Nasacard 
           date = {info.date}
           img = {info.hdurl}
           expl = {info.explanation}
           title = {info.title}
           owner = {info.copyright}
            />
        </div>
     
 )
}