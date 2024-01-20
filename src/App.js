import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories"
import ShowFullItem from './components/ShowFullItem'
import { useState } from "react";

const goods = {
  showFullItem: false,
  fullItem:{},
  currentItems:[],
  orders: [],
  items: [
    {
      id: 1,
      title: "Стул белый",
      img: "chairwhite.jpeg",
      disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias suscipit vero animi tempore minima repudiandae similique eveniet aliquid accusantium aliquam quidem maiores, ex placeat nostrum nam maxime a perspiciatis?",
      price: "55.00",
      category:'chairs'
    },
    {
      id: 2,
      title: "Стол",
      img: "table.jpeg",
      disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias suscipit vero animi tempore minima repudiandae similique eveniet aliquid accusantium aliquam quidem maiores, ex placeat nostrum nam maxime a perspiciatis?",
      price: "123.00",
      category: 'tables'
    },
    {
      id: 3,
      title: "Диван",
      img: "sofa.jpeg",
      disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias suscipit vero animi tempore minima repudiandae similique eveniet aliquid accusantium aliquam quidem maiores, ex placeat nostrum nam maxime a perspiciatis?",
      price: "345.00",
      category: 'sofa'
    },
    {
      id: 4,
      title: "Лампа",
      img: "lamp.jpeg",
      disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias suscipit vero animi tempore minima repudiandae similique eveniet aliquid accusantium aliquam quidem maiores, ex placeat nostrum nam maxime a perspiciatis?",
      price: "15.00",
      category: 'light'
    },
    {
      id: 5,
      title: "Стул серый",
      img: "chairgray.jpeg",
      disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias suscipit vero animi tempore minima repudiandae similique eveniet aliquid accusantium aliquam quidem maiores, ex placeat nostrum nam maxime a perspiciatis?",
      price: "45.00",
      category: 'chairs'
    },
  ],
};

function App() {

  goods.currentItems=goods.items

  const [state, setState] = useState(goods);

  const addToOrder = (item) => {
  
    let isInArray = false
    state.orders.forEach((el) => {
      if (el.id === item.id)
        isInArray=true    
    })
    if (!isInArray) 
    setState({ ...state, orders: [...state.orders, item] });
  
  };

  const deleteOrder = (id)=>{
    setState({ ...state, orders: state.orders.filter(el=>el.id !== id) });
  }

  const chooseCategories = (category)=>{
    if (category === 'all'){
      setState({ ...state, currentItems: state.items })
      return
    }

   
    setState({ ...state, currentItems: state.items.filter(el => el.category === category) })
  }

  const onShowItem = (item)=>{
    // console.log(item);
    // setState({...state, fullItem: item})
    setState({ ...state, showFullItem: !state.showFullItem, fullItem: item })
  }
  
  return (
    <div className="wrapper">
      <Header orders={state.orders} deleteOrder={deleteOrder} />
      <Categories chooseCategories={chooseCategories} />
      <Items items={state.currentItems} onAdd={addToOrder} onShowItem={onShowItem} />
      {state.showFullItem && <ShowFullItem item={state.fullItem} onAdd={addToOrder} onShowItem={onShowItem} />}
      <Footer />
    </div>
  );
}

export default App;
