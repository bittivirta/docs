import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Hotkey({ children, title, icon, link }) {
  return <div class={style.fieldContainer}>
    <div class={style.field}>
      <div class={style.title}>
        {icon && <span class={style.icon}><FontAwesomeIcon icon={icon} fixedWidth /></span>}
        {title && (
          <span class={style.text}>{title}</span>
        )}
      </div>
      {link ?
        <a href={link} class={style.content} target="_blank" >{children}</a>
        :
        <div class={style.content}>{children}</div>
      }
    </div>
  </div>;
}
