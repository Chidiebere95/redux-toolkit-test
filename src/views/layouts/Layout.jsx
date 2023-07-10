import React, { useContext } from 'react';
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { AppContext } from '../../context/Context';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Layout = () => {
  const { toggleTheme, theme } = useContext(AppContext);
  console.log(theme);
  return (
    <div className='root-layout card-body'>
      {/* <ScrollRestoration /> */}
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
