import { Outlet } from 'react-router-dom';
import Moon from '../icons/moon';

import './header.styles.scss';

const Header = () => {
  const toggleTheme = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.toggle('light-mode');
  };

  return (
    <>
      <header className="header-section">
        <div className="heading-wrapper">
          <h1 className="header-heading">where in the world?</h1>
        </div>
        <div className="theme-button-wrapper">
          <button className="theme-change-button" onClick={toggleTheme}>
            <Moon />
            <span>Dark Mode</span>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
