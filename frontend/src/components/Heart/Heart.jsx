import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from "../../hooks/useAuthCheck"


const Heart = () => {

    const [heartColor, setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck()   /* custom hook useAuthCheck to get validateLogin function */

    const handleLike = () =>{
        if(validateLogin()){
            setHeartColor((prev)=> prev === "red" ? "white" : "red")
        }
    }


  return (
    <AiFillHeart size={24} color={heartColor} onClick={(e) =>{
       e.stopPropagation()  /* prevent the bubbling behaviour */
       handleLike()
    }}/>
  )
}

export default Heart
