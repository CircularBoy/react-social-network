import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {authLogin} from "../../redux/auth-reducer";
import {maxSize, required} from "../../utils/validators";
import {Input} from "../helpers/formsControlls/FormsControlls";
import { Redirect } from 'react-router-dom'

const maxSize20 = maxSize(20);

function LoginForm(props) {
  const isError = props.anyTouched && props.error
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required, maxSize20]} placeholder="login" name={'login'} type="text" component={Input}/>
      </div>
      <div>
        <Field validate={[required, maxSize20]} placeholder="password" type="password" name={'password'} component={Input}/>
      </div>
      <div>
        <Field placeholder="email" type="checkbox" name={'rememberMe'} component={Input}/> Remember me
      </div>
      {isError || <div>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>


    </form>
  )

}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

function Login (props) {
  const onSubmit = (formData) => {
    let {login: mail, password, rememberMe} = formData
    props.authLogin(mail,password,rememberMe)
  }

  if(props.isAuth) return <Redirect to="/profile"/>
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {authLogin})
)(Login)