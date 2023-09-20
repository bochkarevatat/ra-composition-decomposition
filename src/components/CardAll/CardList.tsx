import Card from "./Card";

// компонент самой карточки

type CardListProps = {
    key: string,
  children: string
  }
  
  const CardList: React.FC<CardListProps> = ({titles}) => {
    // 
  
    return (
     <>
      <ul className="card-list">{titles.map((item, index) => {
        return <li key={index} className="card-item"><Card {...item}/></li>
    })}
    </ul>
   
    </>
      
      
    )
  }
  
  
  export default CardList