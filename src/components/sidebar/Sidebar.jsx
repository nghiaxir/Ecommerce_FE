import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import { Link, useLocation } from 'react-router-dom'

import sidebarNav from '../../configs/sidebarNav'
import images from '../../constants/image'

const Sidebar = () => {
    const [activeIndev, setActiveIndex] = useState(0)
    const location = useLocation()

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }


    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img src={images.logo} alt=''/>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {sidebarNav.map((nav, index) => (
                    <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndev === index && 'active'}`}>
                        <div className='sidebar__menu__item__icon'>
                            {nav.icon}
                        </div>
                        <div className='sidebar__menu__item__txt'>
                            {nav.text}
                        </div>
                    </Link>
                ))
                }
                <div className="sidebar__menu__item">
                    <div className='sidebar__menu__item_icon'>
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className='sidebar__menu__item__txt'>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar