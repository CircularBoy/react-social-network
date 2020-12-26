import React from 'react'
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import Loader from "./components/helpers/loader/Loader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }


  render() {
    if(!this.props.initialized) return <Loader />

    return (
      <BrowserRouter>
        <div className="app">
          <HeaderContainer/>
          <Sidebar/>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initialize})
)(App);
