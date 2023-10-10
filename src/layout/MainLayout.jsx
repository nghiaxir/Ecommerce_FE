import React from 'react'
import "./MainLayout.scss"
import  {Outlet} from "react-router-dom"
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/Topnav'
const MainLayout = () => {
  return (
    <div>
        <Sidebar />
        <div className='main'>
            <div className='main__content'>
                <Topnav />
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default MainLayout