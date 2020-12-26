import Loader from "../../../helpers/loader/Loader";
import Status from "../status/StatusHooks";

const Profile = (props) => {
  if(!props.profile) {
    return <Loader />
  }
  return (
    <div>
      <img src={props.profile.photos.small} alt=""/>
      <p>{props.profile.fullName}</p>
      <p>{props.profile.aboutMe}</p>
      <Status
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  )
}

export default Profile
