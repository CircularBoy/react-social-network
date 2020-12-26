import s from './formsControlls.module.css'

export const Input = ({input, meta, ...props}) =>{
  let isError = meta.touched && meta.error

  return <label className={s.formField}>
    <input className={isError ? 'error' : null} {...input} {...props}/>
    {isError && <p className={s.errorText}>{meta.error}</p>}
  </label>
}

export const Textarea = ({input, meta, ...props}) =>{
  let isError = meta.touched && meta.error

  return <label className={s.formField}>
    <textarea className={isError ? 'error' : null} {...input} {...props}/>
    {isError && <p className={s.errorText}>{meta.error}</p>}
  </label>
}