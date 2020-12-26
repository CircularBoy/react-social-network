import {Component} from "react";

class Status extends Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.status !== prevState.status) {
      this.setState({status: this.props.status})
    }
  }

  changeEditMode = (isEdit) => {
    this.setState({
      editMode: isEdit
    })
  }

  changeStatus = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return <div>
      {!this.state.editMode
        ? <span onClick={() => {
          this.changeEditMode(true)
        }}>{this.state.status}</span>
        : <input
          onChange={this.changeStatus}
          autoFocus
          onBlur={() => {
            this.changeEditMode(false)
          }}
          value={this.state.status}
          type="text"/>
      }
    </div>
  }
}

export default Status;