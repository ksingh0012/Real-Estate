import React from 'react'
import "./PropertyCard.css"
import { AiFillHeart } from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from 'react-router-dom'


const PropertyCard = ({ card }) => {

    const navigate = useNavigate()

    return (
        <div className="flexColStart r-card" onClick={()=>navigate(`../properties/${card.id}`)}>
            <img src={card.image} alt="home" />
            <span className="secondaryText r-price">
                <div>
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                </div>
                <AiFillHeart size={24} style={{color : "white"}}/> 
            </span>
            <span className="primaryText name">{truncate(card.title,{length : 15})}</span>
            <span className="secondaryText detail">{truncate(card.description,{length : 80})}</span>
        </div>
    )
}

export default PropertyCard
