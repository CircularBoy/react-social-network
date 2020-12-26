import React from "react";
import {connect} from "react-redux";
import {
  follow, requestUsers,
  setCurrentPage, setFollowButtonsDisable,
  setIsFetching,
  unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import Loader from "../../helpers/loader/Loader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowButtonsDisabled,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage)
  }

  onPageChanged = (currentPage) => {
    this.props.requestUsers(this.props.pageSize, currentPage)
  }

  render() {
    return <>
      {this.props.isFetching ? <Loader /> : null}
      <Users onPageChanged={this.onPageChanged}
             currentPage={this.props.currentPage}
             totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             users={this.props.users}
             followButtonsDisable={this.props.followButtonsDisabled}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    // users: getUsers(state),
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followButtonsDisabled: getFollowButtonsDisabled(state)
  }
}

export default
compose(
  connect(mapStateToProps, {
    follow,unfollow,requestUsers,setCurrentPage,setIsFetching,setFollowButtonsDisable
  })
)(UsersContainer)