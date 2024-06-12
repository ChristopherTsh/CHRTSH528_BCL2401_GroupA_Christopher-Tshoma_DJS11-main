import React from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from "react-router-dom"


export default function Layout(){
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}