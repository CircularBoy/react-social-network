import s from './loader.module.css'

export default function Loader() {
  return (
    <div className={s.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}