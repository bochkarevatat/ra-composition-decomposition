import React from 'react'
import NewsTitle  from './NewsTitle'

type NavNewsProps = {
  key: string,
  children: string
}

const NavNews: React.FC<NavNewsProps> = ({ titles, children }) => {
  return (
   <>
   <ul className="title-list">{titles.map((item, index) => {
        return <li key={index} className="title-item"><NewsTitle {...item}/></li>
    })}</ul>
    {children}
   </>
    

  )
}


export default NavNews