import React from 'react';
import { FaTrash } from "react-icons/fa";

const Order = ({ item, deleteOrder }) => {
  return (
    <div className='item'>
      <img src={'./images/' + item.img} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash className='deleteIcon' onClick={() => deleteOrder(item.id)} />
    </div>
  );
};

export default Order;