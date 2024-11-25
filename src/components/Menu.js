import React from 'react'
import Pizza from './Pizza';
import { pizzaData } from '../data';

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // const pizzas = [];
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
        {numPizzas > 0 && (pizzas.map(pizza => (
          <Pizza name={pizza.name} ingredient={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} key={pizza.name} />
        )))}
      </ul>
    </main>
  )
}

export default Menu;
