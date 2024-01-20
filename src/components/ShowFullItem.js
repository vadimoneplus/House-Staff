import React from 'react';

const ShowFullItem = ({ item, onAdd, onShowItem }) => {
  // console.log(item);
  return (
    <div className='fullItem'>
      <div>
        <img src={'./images/' + item.img} onClick={onShowItem}/>
      <h2>{item.title}</h2>
      <p>{item.disc}</p>
      <b>{item.price}$</b>
      <div className='addCard' onClick={() => onAdd(item)}>+</div>
      </div>
      
    </div>
  );
};

export default ShowFullItem;