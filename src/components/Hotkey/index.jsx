import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./style.module.scss"


export default function Hotkey({ children }) {
  if (typeof children !== 'string') throw new Error('Hotkey children must be a string');

  const keys = children.replace(" ", "").split('+');
  let hotkeys = [];
  keys.forEach((key, index) => {
    switch (key.toLowerCase()) {
      case "shift":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'up']} /></kbd>);
        break;
      case "cmd":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'command']} /></kbd>);
        break;
      case "macctrl":
      case "mctrl":
      case "ictrl":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'angle-up']} /></kbd>);
        break;
      case "ifn":
      case "globe":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fal', 'globe']} /></kbd>);
        break;
      case "eject":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'eject']} /></kbd>);
        break;
      case "opt" || "option":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'option']} /></kbd>);
        break;
      case "shift" || "shft":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'up-from-line']} /></kbd>);
        break;
      case "enter":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'turn-down-left']} /></kbd>);
        break;
      case "caps":
      case "capslk":
      case "cpslk":
      case "lock":
      case "clock":
      case "capslock":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'lock-a']} /></kbd>);
        break;
      case "up":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'caret-up']} /></kbd>);
        break;
      case "down":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'caret-down']} /></kbd>);
        break;
      case "left":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'caret-left']} /></kbd>);
        break;
      case "right":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'caret-right']} /></kbd>);
        break;
      case "pageup":
      case "pgup":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'arrow-up-to-line']} /></kbd>);
        break;
      case "pagedown":
      case "pgdown":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'arrow-down-to-line']} /></kbd>);
        break;
      case "bst":
      case "bckspce":
      case "backspace":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'delete-left']} /></kbd>);
        break;
      case "del":
      case "delete":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'delete-right']} /></kbd>);
        break;
      case "tab":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'arrow-right-long-to-line']} /></kbd>);
        break;
      case "space":
        hotkeys.push(<kbd className={style.key}><FontAwesomeIcon key={"kbd-" + key + "-" + index} icon={['fas', 'transporter-empty']} /></kbd>);
        break;
      default:
        if (key.length == 1) key = key.toUpperCase();
        hotkeys.push(<kbd key={"kbd-" + key + "-" + index} className={style.key}>{key.toString()[0].toUpperCase() + key.toString().slice(1)}</kbd>);
        break;
    }
    if (index < keys.length - 1) hotkeys.push(<span key={"kbd-" + key + "-" + index + "-plus"} className="mx-[0.1rem]">+</span>);
  })
  return <span className={style.hotkey}>{hotkeys}</span>
}
