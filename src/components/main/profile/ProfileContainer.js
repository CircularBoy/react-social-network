import react from "react";
import {withRouter} from 'react-router-dom';
import Posts from './Posts'
import {addPost, requestProfile, requestProfileStatus, updateProfileStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./profile/profile";
import {compose} from "redux";

class ProfileContainer extends react.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = this.props.authUserId;

      if(!userId) {
        this.props.history.push('/login')
        return
      }
    }
    this.props.requestProfile(userId)
    this.props.requestProfileStatus(userId)
  }

  render() {
    console.log(this.props)
    return <section>
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateProfileStatus}
      />
      <Posts
        posts={this.props.posts}
        addPost={this.props.addPost}
      />
    </section>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps,
    {addPost, requestProfile, requestProfileStatus, updateProfileStatus}))
  (ProfileContainer)

