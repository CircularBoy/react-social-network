import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/img/avatar.png";
import React from "react";

const User = ({user, follow, unfollow, followButtonsDisable, unfollowButtonsDisable}) => {
  return (
    <div to={'profile/' + user.id} className={s.userWrap}>
      <div className={s.person}>
        <NavLink to={'profile/' + user.id} className={s.avatar}>
          <img src={user.photos.small ? user.photos.small : avatar} alt="avatar"/>
        </NavLink>
        {user.followed ?
          <button
            disabled={followButtonsDisable.some(id => id === user.id)}
            className={s.avatar}
            onClick={() => {
              unfollow(user.id)

            }}
          >Unfollow</button> :
          <button
            disabled={followButtonsDisable.some(id => id === user.id)}
            className={s.avatar}
            onClick={() => {
              follow(user.id)
            }}
          >Follow</button>}
      </div>
      <div className={s.about}>
        <div>
          <p>{user.name}</p>
          <p>{user.role}</p>
        </div>

        <div>
          <p>{user.country}</p>
          <p>{user.city}</p>
        </div>
      </div>
    </div>
  )
}

export default User