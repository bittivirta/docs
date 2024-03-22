import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function InfoField({ children, title, icon, link }) {
  return <div className={style.fieldContainer}>
    <div className={style.field}>
      <div className={style.title}>
        {icon && <span className={style.icon}><FontAwesomeIcon icon={icon} fixedWidth /></span>}
        {title && (
          <span className={style.text}>{title}</span>
        )}
      </div>
      {link ?
        <a href={link} className={style.content} target="_blank" >{children}</a>
        :
        <div className={style.content}>{children}</div>
      }
    </div>
  </div>;
}
