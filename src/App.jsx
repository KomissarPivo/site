import React, { useState } from 'react';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import s from "./App.module.css";
import { Outlet } from 'react-router-dom';



class App extends React.Component {
    render() {
        return (
            <section className={s.wrapper}>
                <div>
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        );
    }
}

export default App;