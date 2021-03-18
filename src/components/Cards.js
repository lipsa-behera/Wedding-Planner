import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>🔥 Get Inspired from Amazing Wedding Ideas!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Love Bonds👀'
              label='Ring Ceremony'
              path='/Vendors'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Find your way to your soulmate😊'
              label='Bride Entry'
              path='/Vendors'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Your Wedding, Your Way🔥🔥'
              label='Wedding garland'
              path='/Vendors'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Soulmates'
              label='Soulmates'
              path='/Vendors'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Love Journey'
              label='Love'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
