import './sidebar.scss';
import {useState, useContext}  from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

import { ThemeContext } from '../../providers/ThemeProvider';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/', active:true },
    { title: 'Sales', icon: 'chart-line', path: '/sales' , active:false },
    { title: 'Costs', icon: 'chart-column', path: '/costs' , active:false },
    { title: 'Payments', icon: 'wallet', path: '/payments' , active:false },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' , active:false },
    { title: 'Messages', icon: 'envelope', path: '/messages' , active:false },


    { title: 'Settings', icon: 'sliders', path: '/settings' , active:false },
    { title: 'Support', icon: 'phone-volume', path: '/support' , active:false },
];


    
function Sidebar(){

    const [items, setItems] = useState(routes)

    const [opened, setOpened] = useState(true)

    const [theme, setTheme] = useContext(ThemeContext)



    function toggleSidebar(){
        setOpened(!opened)
    };


    function changeTheme(){
        setTheme(theme === 'ligth' ? 'dark' : 'ligth')
    }

 
    function goToRoute(path, index){
        console.log(`going to "${path}"`);

        const copy = Object.assign([], items)

        for(const item of copy){
            item.active = false
        }

        copy[index].active = true

        setItems(copy)
    }

    const containerClassnames = classnames(`sidebar ${opened ? 'opened' : ''}`);

    function getItemsRoutes(index, item){
        return <div key={ index } onClick={() => goToRoute(item.path, index) } className={`nav-item ${item.active ? 'nav-active' : ''}`}>   
                    <FontAwesomeIcon icon={ item.icon } />
                    <span>{ item.title }</span>
                </div>
    }


    const routes_page =  items.map((item, index) => {
        if(index < 5){
            return getItemsRoutes(index, item)
        }
    })

    const routes_user =  items.map((item, index) => {
        if(index > 5 && index < items.length){
            return getItemsRoutes(index, item)
        }
    })    
        

    
        return (
            
            <div className={containerClassnames}>

                <div className='block-nav-logo'>
                    
                
                        <img
                            className = "sitebar-logo"
                            src={ logo }
                            alt="TensorFlow logo"
                        />

                    <button onClick={() => toggleSidebar()} className='button-opened'>
                        <FontAwesomeIcon icon={ opened ? 'angle-left' : 'angle-right' } />
                    </button>
                </div>


                <div className = "block-nav-page">
                    {
                       routes_page
                    }
                </div>

                <div className = "block-nav-user">
                    
                    {
                       routes_user
                    }

                    <div onClick={changeTheme} className='container-theme'>
                        <span></span>
                    </div>
                </div>
            </div>
            )

}


export default Sidebar