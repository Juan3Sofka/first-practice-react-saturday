import ButtonComponent from "./ButtonComponent";
import './follow-card.css'


export default function FollowCard({ text }) {
    return (
        <div className="follow-card">
            <img className="follow-card__image" src="https://unavatar.io/midudev" alt="image user" />
            <div className="follow-card__text">
                <p>midudev</p>
                <p>@midudev</p>
            </div>
            <ButtonComponent text={text} title={'Seguir'} />
        </div>
    )
}