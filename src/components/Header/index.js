import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default (props) => {
    const {
        title,
        navList,
        showLogo,
        handleClick,
    } = props;

    const itemNav = (item, index) => (
        <a
            href="#"
            key={index}
            className='item'
            onClick={() => handleClick(item, index)}
        >
            {item.name}
        </a>
    );

    return (
        <header className="App-header">
            <div className="leftCol">
                {
                    showLogo &&
                    <img src={logo} className="App-logo" alt="logo" />
                }
                <h1 className="App-title">
                    {title}
                </h1>
            </div>
            <nav className="nav">
                <NavLink to="/" exact={true} className='item'>Home</NavLink>
                <NavLink to="/about" className='item'>About</NavLink>
                {
                    // navList.length > 0 &&
                    // navList.map((item, index) =>
                    //   itemNav(item, index)
                    // )
                }
            </nav>
        </header>
    );
}