import React from 'react'
import {Route} from "react-router-dom";
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import s from './main.module.css'
import Login from "../auth/Login";

function Main() {
  return (
    <section className={s.main}>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route path='/users' render={() => <UsersContainer/>}/>
      <Route path='/login' render={() => <Login/>}/>
    </section>
  )
}

export default Main
