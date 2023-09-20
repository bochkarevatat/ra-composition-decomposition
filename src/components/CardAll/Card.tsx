import React, { ReactNode } from 'react';

// компонент самой карточки
type CardProps = {
  title: string,
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ title, url, item1, item2, item3 }) => {
  return (
    <div className='card'>
      <h3>
        <a  href={url}>{title}</a></h3>
      <div className='card-children'>{ item1}</div>
      <div className='card-children'>{ item2}</div>
      <div className='card-children'>{ item3}</div>
      
      
     
    </div>
  )
}

export default Card