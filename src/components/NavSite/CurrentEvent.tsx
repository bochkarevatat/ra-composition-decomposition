import NewsTitle from './NewsTitle'

//Компонент для отображения компонент c текущим событием

type CardImageProps = {
    information: currentEv;
    
  }
const CardImage: React.FC<CardImageProps> = ({ information }) => {
    return (
      <div className="currenEvent-container">
        <div>
        <img src={information.img} alt={information.img} />
        </div>
       
      <a href={information.url}>{information.title}</a>
        <p className="text-card">{information.text}</p>
      </div>
    );
  }
 
  interface currentEv {
    img: string
    title: string,
    text: string,  
    url: string,  
  }
  export default CardImage;