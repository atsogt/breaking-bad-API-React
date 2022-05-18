import "./card.styles.css";

const Card = ({ char }) => {
  const { char_id, img, name, nickname } = char;
  return (
    <div className="card-container" key={char_id}>
      <img className="profile-pic" src={img} alt={`Character: ${name}`} />
      <h1>{name}</h1>
      <h1>Nickname: {nickname}</h1>
    </div>
  );
};

export default Card;
