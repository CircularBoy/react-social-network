import s from "../dialogs.module.css";

const Message = ({text}) => {
    return <div className={s.message}>{text}</div>
}

export default Message