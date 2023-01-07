import tulip from '../assets/tulip.jpeg'
import "./Card.css";

const Card = ({card, handleCardClick, disabled}) => {

  return (
    <button className={`card ${card.matchFound ? "matched" : ""}`} disabled={disabled} onClick={handleCardClick} data-id={card.id}>
      <div className="front side">
        <img src={tulip} alt="tulip" width="50" rounded />
      </div>
      <div className="side back">{card.letter}</div>
    </button>
  )
}
export default Card;