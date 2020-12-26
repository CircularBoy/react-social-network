import React from 'react'
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../helpers/loader/Loader";

// function Menu(props) {
//   return (
//     <menu className={s.nav}>
//       {props.children}
//     </menu>
//   )
// }

function Header(props) {
  return (
    <header className={s.header}>
      <a className={s.logo} href="#!"><img
        src="https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif"
        alt=""/></a>
      {props.isFetching
        ? <Loader/>
        : <ul className={s.nav}>
          {props.isAuth
            ? <>
              <li>{props.login}</li>
              <li>
                <button onClick={props.authLogout}>log out</button>
              </li>
            </>
            : <li><NavLink to={'/login'}>login</NavLink></li>
          }
        </ul>
      }
    </header>
  )
}

export default Header