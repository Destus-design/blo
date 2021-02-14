import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
        <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
          </div>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          
            <img className='cards__item__img' alt='Travel Imag' src={props.src} />
          </figure>
          
        </Link>
      </li>
    </>
  );
}

export default CardItem;