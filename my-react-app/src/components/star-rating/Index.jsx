import { useState } from "react";
import React  from 'react'
import { FaStar } from "react-icons/fa";
import "./styles.css"


export const StarRating = ({noOfStars=6}) => {

    const [rating, setRating]= useState(0)
    const [hover, setHover]= useState(0)

    function handleClick (getCurrentindex){
       setRating(getCurrentindex)
    }

    function handleMouseEnter (getCurrentindex){
        setHover(getCurrentindex)
    }

    function handleMouseLeave (getCurrentindex){
        setHover(rating)
    }

  return (
    <div className="star-rating">
      {[...Array(36)].map((_, index) => {
        index += 1; //2

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  )
}
