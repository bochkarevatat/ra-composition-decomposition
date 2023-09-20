import React from 'react';
import PropTypes from 'prop-types';

// компонент элемента заголовка с ссылкой новости в навигации

type NewsTitleProps = {
    title: string,
    url: string
  }

  const NewsTitle: React.FC<NewsTitleProps> = ({ title, url }) => {
return(
<a href={url}>{title}</a>
)

  }

  export default NewsTitle