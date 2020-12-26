import React, {useState, useEffect} from "react";

const Status = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const updateStatus = (e) => {
    const statusBody = e.target.value
    setEditMode(false)
    debugger
    props.updateStatus(statusBody)
  }

  const updateLocalStatus = (e) => {
    const statusBody = e.target.value
    setStatus(statusBody)
  }

  return (
    <div>
      {!editMode && <span onClick={activateEditMode}>{status || 'Click to enter status'}</span>}

      {editMode && <input
        onChange={updateLocalStatus}
        onBlur={updateStatus}
        value={status}
        autoFocus={true}/>
      }
    </div>

  )
}
export default Status;