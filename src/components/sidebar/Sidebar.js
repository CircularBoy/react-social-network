import React from 'react'
import s from './sidebar.module.css'
import {NavLink} from "react-router-dom";

function Sidebar () {
  return (
    <nav className={s.sidebar}>
      <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
      <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
      <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
    </nav>
  )
}

export default Sidebar