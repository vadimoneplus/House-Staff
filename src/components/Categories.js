import React from 'react';
import {useState} from "react"


const Categories = ({ chooseCategories }) => {
  const [state, setState] = useState({
    categories:[
      {
        key: 'all',
        name: 'Всё'
      },
      {
        key: 'chairs',
        name: 'Стулья'
      },
      {
        key: 'tables',
        name: 'Столы'
      },
      {
        key: 'sofa',
        name: 'Диваны'
      },
      {
        key: 'light',
        name: 'Свет'
      }
    ]
})
  
  return (
    <div className='categories'>
      {state.categories.map(el => (
        <div key={el.key} onClick={() => chooseCategories(el.key)}>{el.name}</div>
      ))}
    </div>
  );
};

export default Categories;