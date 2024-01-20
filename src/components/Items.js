import React from 'react';
import Item from './Item';

const Items = ({ items, onAdd, onShowItem }) => {
  
  return (
    <main>
      {items.map(element=>(
        <Item key={element.id} item={element} onAdd={onAdd} onShowItem={onShowItem} />
      ))}
    </main>
  );
};

export default Items;