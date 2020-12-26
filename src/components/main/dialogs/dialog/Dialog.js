import s from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = ({id, name}) => {
  return (
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + id} activeClassName={s.active}>{name}</NavLink>
      </div>
  )
}

export default Dialog