import CardList from './CardList';
import './card.css'

// Компонент с карточками погоды, теле и др
const CardAll = () => {
  return (
    <div className='card_all'>

        <CardList titles={data}/>
        
    </div>
  )
}

const data =[
    {
       " id": 1,
        "title": "Погода",
        "url": "#",
        "item1": "+17",
        "item2": "Утром",
        "item3": "Днем",

        
      },
      {
        "title": "Посещаемое",
        "url": "#",
        "item1": "Недвижимость",
        "item2": "Марект",
        "item3": "Авто.ру",
       
      },
      {
        "title": "Карта Германии",
        "url": "#",
        "item1": "Расписания",
        
        
      },
      {
        "title": "Телепрограмма",
        "url": "#",
        "item1": "ТНТ Best",
        "item2": "Джинглинки",
        "item3": "Наедине со всеми",
        
      },
      {
        "title": "Эфир",
        "url": "#",
        "item1": "Управление как искусство",
        "item2": "Ночь",
        "item3": "Андрей Вознесенский",
        
      },
]


export default CardAll