import React, { useState } from 'react';
import './App.css';
import data from './components/data';
import Menu from './components/Menu';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <div>
        <h1 className='text-center mt-5'>Our Menu</h1>
        <div className='menu-border mx-auto '></div>
       
        <Menu  items = { menuItems } />
    </div>
  );
}

export default App;
