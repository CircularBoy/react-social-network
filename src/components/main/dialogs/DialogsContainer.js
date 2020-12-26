import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {addMessage} from "../../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addMessage})
)(Dialogs)
