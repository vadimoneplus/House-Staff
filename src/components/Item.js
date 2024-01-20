import React from 'react';

const Item = ({ item, onAdd, onShowItem }) => {
  return (
    <div className='item'>
      <img src={'./images/' + item.img} onClick={() => onShowItem(item)}/>
      <h2>{item.title}</h2>
      <p>{item.disc}</p>
      <b>{item.price}$</b>
      <div className='addCard' onClick={() => onAdd(item)}>+</div>
    </div>
  );
};

export default Item;