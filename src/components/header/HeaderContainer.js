import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authLogout} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }

}

let mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default compose(
  connect(mapStateToProps,
  {authLogout})
)(HeaderContainer)