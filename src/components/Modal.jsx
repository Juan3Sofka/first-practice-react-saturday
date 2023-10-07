// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonComponent from "./ButtonComponent";
import './modal.css'
export const Modal = ({userName,  handleIsHidenn, handleStopFollowing}) => {

    

	return (
		<section className="modal">
			<div className="modal-content">
				<h3 className="modal-title">¿Queres dejar de seguir a {userName}?</h3>
				<p className="modal-text">
					Sus Tweets ya no aparecerán en tu cronología de inicio. Podrás seguir viendo su perfil, a menos que
					sus Tweets estén protegidos.
				</p>
				<ButtonComponent className={'modal-btn'} text={"Dejar de seguir"} handleClick={handleStopFollowing}/>
				<ButtonComponent className={'modal-btn'} text={"cancelar"} handleClick={handleIsHidenn} />
			</div>
		</section>
	);
};
