import React from 'react'
import s from './Users.module.css'
import avatar from '../../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  pageCount = 5;

  let pages = [];

  while (pages.length < pageCount) {
    pages.push(pages.length)
  }

  return (
    <div>
      <div>
        {
          pages.map(p => {
            p += 1;
            return <span
              key={p}
              className={props.currentPage === p ? s.pagesActive : null}
              onClick={() => {
                props.onPageChanged(p)
              }}
            >{p}</span>
          })}
      </div>

      {props.users.map(u => {
        return (
          <div to={'profile/' + u.id} key={u.id} className={s.userWrap}>
            <div className={s.person}>
              <NavLink to={'profile/' + u.id} className={s.avatar}>
                <img src={u.photos.small ? u.photos.small : avatar} alt="avatar"/>
              </NavLink>
              {u.followed ?
                <button
                  disabled={props.followButtonsDisable.some(id => id === u.id)}
                  className={s.avatar}
                  onClick={() => {
                    props.unfollow(u.id)

                  }}
                >Unfollow</button> :
                <button
                  disabled={props.followButtonsDisable.some(id => id === u.id)}
                  className={s.avatar}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >Follow</button>}
            </div>
            <div className={s.about}>
              <div>
                <p>{u.name}</p>
                <p>{u.role}</p>
              </div>

              <div>
                <p>{u.country}</p>
                <p>{u.city}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Users