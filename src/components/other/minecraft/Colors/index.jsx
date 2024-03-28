import clsx from 'clsx';
import style from './style.module.scss';

export default function Colors({ items }) {
  return <div className={style.colors}>
    {items.map((item, index) => <div key={index} className={clsx(style.color)} style={{ backgroundColor: item.hex, color: item.light ? "#000000" : "#ffffff" }}>
      <span className={style.code}>{item.code}</span>
      <span className={style.name}>{item.name}</span>
    </div>)}
  </div>;
}
