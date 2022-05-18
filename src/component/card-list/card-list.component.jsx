import Card from "../card/card.componenet"
import './card-list.styles.css';


const CardList = ({characters}) => (
    // const {name, nickname, char_id} = this.props.characters;
  
    <div className='card-list'>
        {characters.map((char)=>{
            return <Card char={char} key={char.char_id}/>
        })}
    </div>
    
)


            


export default CardList;