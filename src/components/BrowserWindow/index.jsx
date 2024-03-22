import style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BrowserWindow({ children, url = "https://munsivu.fi/", iframe = false }) {
  return <div class={style.window}>
    <div class={style.header}>
      <div class={style.controls}>
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-live-600' />
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-gold-500' />
        <FontAwesomeIcon icon={["fas", "circle"]} className='me-1 text-sm text-circuit-500' />
      </div>
      <div class={style.url}>
        <span class={style.urlText}>{url}</span>
      </div>
      <div class={style.right}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
    </div>
    {iframe ?
      <iframe src={url} class={style.iframe} /> :
      <div class={style.frame}>
        {children}
      </div>
    }
  </div>;
}
