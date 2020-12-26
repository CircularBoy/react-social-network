import React from 'react'
import s from './dialogs.module.css'
import Message from "./message/Message";
import Dialog from "./dialog/Dialog";
import {Field, reduxForm} from "redux-form";

function Dialogs (props) {
  const sendNewMessage = (formData) => {
    props.addMessage(formData.message)
  }
  return (
    <section className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        {props.state.dialogs.map((item) => <Dialog id={item.id} key={item.id} name={item.name}/>)}
      </div>

      <div className={s.messages}>
        {props.state.messages.map((item ) => <Message key={item.id} text={item.msg}/>)}

        <NewMassageForm onSubmit={sendNewMessage}/>
      </div>


    </section>
  )
}

let NewMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field type="text" name='message' component='textarea'/>
      <br/>
      <input type="submit" value="Send message"/>
    </form>
  )
}

NewMassageForm = reduxForm({form: 'createNewMassage'})(NewMassageForm)

export default Dialogs
