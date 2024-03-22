import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BrowserWindow({ children, url = "https://munsivu.fi/", iframe = false }) {
  return <div className={style.window}>
    <div className={style.header}>
      <div className={style.controls}>
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-live-600' />
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-gold-500' />
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-circuit-500' />
      </div>
      <div className={style.url}>
        <span className={style.urlText}>{url}</span>
      </div>
      <div className={style.right}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
    </div>
    {iframe ?
      <iframe src={url} className={style.iframe} /> :
      <div className={style.frame}>
        {children}
      </div>
    }
  </div>;
}
