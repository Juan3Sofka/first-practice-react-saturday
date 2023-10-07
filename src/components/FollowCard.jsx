/* eslint-disable no-unused-vars */
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import './follow-card.css'
import { Modal } from "./Modal";


// eslint-disable-next-line react/prop-types
export default function FollowCard({ isHidenn, handleIsHidenn, userName, name, isFollowing }) {
    const [isFollow, setIsFollow] = useState(isFollowing)
    
    const [isHovered, setIsHovered] = useState(false);
    
    const [btnFollowText, setBtnFollowText] = useState('Siguiendo');
    
    const btnText =  isFollow ? btnFollowText : 'Seguir';

    const btnClasses = isHovered ?  isFollow ? 'button-following_hover' : 'button_hover' : '';

    

    const handleClick = () => { 
        if(isFollow) handleIsHidenn();
        
        !isFollow && togleIsFollow();
    }

    const togleIsFollow = ()=>{
        setIsFollow(!isFollow);
    }
    
    const handleMouseOut = ()=> {
        if(isFollow)  setBtnFollowText('Siguiendo') ;
        setIsHovered(false)
    }
    const handleMouseEnter = ()=> {
        if(isFollow)  setBtnFollowText('Dejar de seguir') ;
        setIsHovered(true)
    }


    return (
        <div className="follow-card">
            <img className="follow-card__image" src={`https://unavatar.io/${userName}`} alt="image user" />
            <div className="follow-card__text">
                <p>{name}</p>
                <p>@{userName}</p>
            </div>
            <ButtonComponent 
            initialState={'Seguir'} 
            handleMouseOut={handleMouseOut} 
            handleMouseEnter={handleMouseEnter} 
            className={btnClasses }
            handleClick={handleClick} 
            text={btnText}            
            />
            
        </div>
    )
}