import style from "./style.module.scss"
import clsx from "clsx"
import Link from '@docusaurus/Link';

export default function Button({ children, href, to, onClick, className, size }) {
  const props = {
    onClick: onClick,
    className: clsx(style.button, size == "lg" && style.lg, className),
    target: href && "_blank",
  };

  if (to) {
    return <Link to={to} {...props}>
      {children}
    </Link>;
  }

  if (href) {
    return <a href={href} {...props}>
      {children}
    </a>;
  }

  return <div {...props}>
    {children}
  </div>;

}
