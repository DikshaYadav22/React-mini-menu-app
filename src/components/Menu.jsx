import React , { useState } from 'react';
import './Style.css';
import { Button } from 'reactstrap';

const Menu = ({ items }) => 
{
    const [menus, setMenus] = useState(items);
    const setMenu = (category)=>
    {
        const filteredMenu = items.filter((menu)=> {
           return menu.category == category;
        });
        setMenus(filteredMenu);

        console.log(menus);
        
    }
    return(
        <>
            <div className='menu mt-2 p-5'>
            <div className="menu-items"><Button className='menu-btn first'>All</Button></div>
            <div className="menu-items">
                <Button onClick={()=>setMenu('breakfast')} className='menu-btn'>Breakfast</Button>
            </div>
            <div className="menu-items">
                <Button onClick={()=>setMenu('lunch')} className='menu-btn'>Lunch</Button>
            </div>
            <div className="menu-items">
                <Button  onClick={()=>setMenu('shakes')} className='menu-btn'>Shakes</Button>
            </div>
        </div>
            <div className="main-container">
            {
                menus.map((item, index)=> {
                    return(
                        <>
                            <div className="sub-container">
                                <img src={item.img} width="230" height="220" />
                            </div>
                            <div className="sub-container">
                                
                                <h5 className='text-capitalize'>{item.title}</h5>
                                <strong>${ item.price }</strong>
                                <hr/>
                                <p className="text-justify">{item.desc}</p>
                                <span> {item.category} </span>
                            </div>
                        </>
                    
                    )
                })
            }
        </div>
    </>
    )
}

export default Menu;