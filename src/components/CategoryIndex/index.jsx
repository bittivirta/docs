import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';
import Link from '@docusaurus/Link';


function Category({ link, title, description, icon, image }) {
  let visual = <FontAwesomeIcon icon={faQuestionCircle} size='2x' fixedWidth />
  if (icon) {
    visual = <FontAwesomeIcon icon={icon} size='2x' fixedWidth />
  } else if (image) {
    visual = <img src={image} alt={title} width={40} className='block' />
  }
  return (
    <Link to={link} className="shadow-md border border-solid border-slate-100 p-4 rounded-xl flex items-center text-slate-800 hover:no-underline hover:text-primary hover:scale-[1.02] transition-all">
      <div className='mr-3'>
        {visual}
      </div>
      <div>
        <h3 className="m-0 p-0">{title}</h3>
        {description && <span className="m-0 p-0">{description}</span>}
      </div>
    </Link>
  );
}

export default function CategoryIndex({ items }) {
  console.log(items);
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <Category
            key={index}
            link={item.link}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
