import React from 'react';
import './Pages.css';
import CardItem from './CardItem';
import image1 from '../img-9.jpg'
import image2 from '../img-home.jpg'
import image3 from '../Crypto.jpg'
import image4 from '../gush.jpg'
import image5 from '../premier-league-restart.jpg'
import covid19 from '../images/covid19.jpg'

import {Link} from 'react-router-dom'

function Cards() {
  return (
         <div className=''>
         <div className="contianer">
         <div className="row">
            <div className="cardtext col-md-4">
            <CardItem
              src={covid19}
              text='New confirmed cases of COVID-19 recorded 1,204 in Nigeria'
              label='Health'
              path='/health'
            />
            <h6> On January 5, 2021  new confirmed cases of COVID-19 recorded 1,204 in Nigeria, taking the total number of infections to 91,351.</h6> 
<p>
The Nigeria Centre For Disease Control (NCDC) made this known via its verified website.

The News Agency of Nigeria (NAN) reports that Nigeria recorded 1,145 cases on Dec. 18, 2020.....</p>
            <Link to='/health/one'><span className='Readmore'> Read more</span></Link>
            
            </div>
            <div className=" col-md-4"> 
             <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            /></div>
            <div className=" col-md-4">
            <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            />
            </div>
          
         </div>
         </div>


      <div className='cards__containe'>
        <div className='cards__wrappe'>
          
        <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image2}
              text='JungleSet Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image4}
              text='Ride with the best of cars'
              label='Lifestyle'
              path='/lifestyle'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image5}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Football'
              path='/services'
            />
            <CardItem
              src={image3}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Crypto'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='FOOTBALL'
              path='/sports'
            />
            
            <CardItem
              src={image2}
              text='JungleSet Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image4}
              text='Ride with the best of cars'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
            

          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image2}
              text='JungleSet Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={image4}
              text='Ride with the best of cars'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
     

  
  );
}

export default Cards;