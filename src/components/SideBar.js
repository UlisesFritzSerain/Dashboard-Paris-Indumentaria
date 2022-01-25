import React from 'react';
import image from '../assets/images/logo-nuevo.jpg';
import {Link,Switch,Route,Routes} from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import CategoriesInDB from './CategoriesInDB';
import LastProductInDb from './LastProductInDb';
import Chart from './Chart'
import ChartUsers from './ChartUsers'
import NotFound from './NotFound';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - París Indumentaria</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="ChartUsers">
                        <i className="fas fa-users"></i>
                        <span>Listado de usuarios</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route  exact path='/' element = {<ContentWrapper/>} />
                <Route  path='/GenresInDb' element = {<CategoriesInDB/>} />
                <Route  path='/LastProductInDb' element = {<LastProductInDb/>} />
                <Route  path='/Chart' element = {<Chart/>} />
                <Route  path='/ChartUsers' element = {<ChartUsers/>} />

                <Route path="*" element={<NotFound />} />

            </Routes>


        </>
    )
}
export default SideBar;