import clsx from 'clsx';
import style from './style.module.scss';
import { useState, useEffect } from 'react';
import { set } from 'immutable';


export default function Formats({ items }) {
  const [magic, setMagic] = useState("");

  const generateRandomString = () => (Math.random() + 1).toString(36).substring(4)

  useEffect(() => {
    setTimeout(() => {
      setMagic(generateRandomString())
    }, 50);
  }, [magic]);



  return <div className={style.formats}>
    {items.map((item, index) => <div key={index} className={clsx(style.format)}>
      <span className={style.code}>{item.code}</span>
      {item.code == "&k" ?
        <span className={clsx(style.name)}>{magic} <span className="opacity-70 text-xs">({item.name})</span></span>
        : item.code == "&l" ?
          <span className={clsx(style.name, "font-bold")}>{item.name}</span>
          : item.code == "&m" ?
            <span className={clsx(style.name, "line-through")}>{item.name}</span>
            : item.code == "&n" ?
              <span className={clsx(style.name, "underline")}>{item.name}</span>
              : item.code == "&o" ?
                <span className={clsx(style.name, "italic")}>{item.name}</span>
                : <span className={clsx(style.name)}>{item.name}</span>
      }
    </div>)}
  </div>;
}
