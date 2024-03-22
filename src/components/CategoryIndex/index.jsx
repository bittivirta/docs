import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';
import Link from '@docusaurus/Link';
import clsx from 'clsx';


function Category({ link, title, description, icon, image, variation }) {
  let visual = <FontAwesomeIcon icon={faQuestionCircle} size='2x' fixedWidth />
  if (icon) {
    visual = <FontAwesomeIcon icon={icon} size={variation == 'large' ? '4x' : '2x'} fixedWidth />
  } else if (image) {
    visual = <img src={image} alt={title} width={variation == 'large' ? '30' : '38'} className='block' />
  }
  return (
    <Link to={link} className={clsx("shadow-md bg-white border border-solid border-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 p-4 rounded-xl flex items-center text-slate-800 hover:no-underline hover:text-primary hover:scale-[1.02] transition-all", variation == "large" ? "p-6" : "p-4")}>
      <div className={clsx(variation == "large" ? "mr-5" : "mr-4")}>
        {visual}
      </div>
      <div>
        <h3 className={clsx("m-0 p-0", variation == "large" && "text-2xl")}>{title}</h3>
        {description && <span className="m-0 p-0 font-medium">{description}</span>}
      </div>
    </Link>
  );
}

export default function CategoryIndex({ items, cols = 2, variation }) {
  return (
    <section>
      <div className={clsx("grid gap-3", cols == 2 && `md:grid-cols-2`, cols == 3 && `md:grid-cols-3`)}>
        {items.map((item, index) => (
          <Category
            key={index}
            link={item.link}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            variation={variation}
          />
        ))}
      </div>
    </section>
  );
}
