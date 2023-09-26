import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';
import Link from '@docusaurus/Link';


function Category({ link, title, description, icon }) {
	return (
		<div className="shadow p-4 rounded-lg flex items-center">
			<div className='mr-3'>
				<FontAwesomeIcon icon={icon ?? faQuestionCircle} size='2x' fixedWidth />
			</div>
			<div>
				<h3 className="m-0 p-0"><Link href={link}>{title}</Link></h3>
				{description && <span className="m-0 p-0">{description}</span>}
			</div>
		</div>
	);
}

export default function CategoryIndex({ items }) {
	console.log(items);
	return (
		<section>
			<div className="container">
				<div className="grid grid-cols-2 gap-3">
					{items.map((item, index) => (
						<Category
							key={index}
							link={item.href}
							title={item.label}
							description={item.description}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
