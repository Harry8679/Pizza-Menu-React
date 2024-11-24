import React from 'react'
import Pizza from './Pizza';
import { pizzaData } from '../data';

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* <Pizza name='Pizza Spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={10} /> */}
      {pizzaData.map(pizza => (
        <Pizza name={pizza.name} ingredient={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} />
      ))}
    </main>
  )
}

export default Menu;
