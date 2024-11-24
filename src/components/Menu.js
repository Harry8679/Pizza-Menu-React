import React from 'react'
import Pizza from './Pizza';
import { pizzaData } from '../data';

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
        {pizzaData.map(pizza => (
          <Pizza name={pizza.name} ingredient={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} key={pizza.name} />
        ))}
      </ul>
    </main>
  )
}

export default Menu;
