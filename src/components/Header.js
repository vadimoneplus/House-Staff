import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Order from './Order';

const Header = ({ orders, deleteOrder}) => {
  const [carOpen,setCarOpen]=useState(false)

 let summa =0
    orders.forEach(el => {
      summa += +(el.price)
    });
  


  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
      
      <ul className='nav'>
        <li>Про Нас</li>
        <li>Контакты</li>
        <li>Кабинет</li>
      </ul>
        <FaShoppingCart onClick={() => setCarOpen(!carOpen)} className={`shopButton ${carOpen && 'active'}`}/>

        {carOpen && (
          <div className='shopCart'>
            { orders.length > 0 
              ? orders.map(el => (
                <Order key={el.id} item={el} deleteOrder={deleteOrder} />
              ))
              
          : <div className='empty'>Товаров нет</div>
          }
            {orders.length > 0 && <p className='summa'>Сумма: {summa}$</p>}
          
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;


{/* <p className='summa'>Сумма: {summa}$</p> */}