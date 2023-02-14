import { useState } from 'react';
import './App.css'
import ContentPage from './components/ContentPage';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/main.css'


const cartStart =[
  {
    id: 0,
    title: "",
    price: 0,

  }
]

function App() {
  const [cartItem, setCartItems] = useState([...cartStart]) 

  return (
    <div className="container">
        <Header/>
        <Nav />
        <ContentPage cartItem={cartItem} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
