import React from 'react';
import { Link } from 'react-router-dom';

const NavMainMenu = () => {

  const urlPath = window.location.pathname;  

  let urlItems = {
    "/": "Home",
    "posts": "Posts",
    "about": "About",
    "contact": "Contact",
  };

  let links = Object.keys(urlItems).map(key => {
    let active = '';
    let splittedUrl = urlPath.split('/');
    if (key === '/' && splittedUrl[1] === "") {
      active = 'active';
    } else {
      active = splittedUrl[1] === key ? 'active' : '';
    }
    return (
      <li key={key}> 
        <Link className={"main-menu-link " + active} to={key} onClick={makeActive}>{urlItems[key]}</Link>
      </li>
    )
  });

  function makeActive(e) {
    let elems = document.querySelectorAll(".main-menu-link");
    elems.forEach(item => {
      item.classList.remove('active');
    })
    e.target.classList.add('active');
  }
  
  return (
    <nav className="nav-main-menu">
      <ul>
        {links}
      </ul>
    </nav>
  );
}

export default NavMainMenu;