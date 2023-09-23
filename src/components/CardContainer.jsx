/* eslint-disable no-unused-vars */
import React from 'react'
import FollowCard from './FollowCard'
import './card-container.css'

function CardContainer({ text }) {
    return (
        <div className='card-container'>
            <h5>Tal vez te guste</h5>
            <FollowCard text={text} />
        </div>
    )
}

export default CardContainer