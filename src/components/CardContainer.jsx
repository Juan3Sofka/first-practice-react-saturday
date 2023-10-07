/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import FollowCard from './FollowCard'
import './card-container.css'
import { Modal } from './Modal'

const users = [
    {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: true,
      
    },
    {
      name: 'Jacobo Garcés',
      userName: 'jacoboduro11',
      isFollowing: true,
      
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: true,
      
    },
    {
      name: 'Mariana Usuga',
      userName: 'bymarium',
      isFollowing: false,
      
    }
  ];


function CardContainer() {


    const [isHidenn, setIsHidenn ] = useState(true);

    const handleIsHidenn = ()=>{
        setIsHidenn(!isHidenn)
    }


    return (
        <div className='card-container'>
            <h5>Tal vez te guste</h5>
            {users.map((user, index)=> (
                <>
                <FollowCard  key={index} handleIsHidenn={handleIsHidenn}  userName={user.userName} name={user.name} isFollowing={user.isFollowing}/>
                {isHidenn && <Modal key={index} userName={'@' + user.userName} handleIsHidenn={handleIsHidenn} />}</>
            ))}
            
            
        </div>
    )
}

export default CardContainer