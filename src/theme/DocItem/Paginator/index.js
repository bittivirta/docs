import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';

export default function DocItemPaginator() {
  const { metadata } = useDoc();
  console.log(metadata);
  const navButtonClasses = 'flex flex-1 items-center justify-between gap-3  md:ms-auto text-start border border-solid border-slate-100 p-3 px-4 rounded-xl bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-silicon-200 shadow-lg text-blue-800 hover:no-underline hover:scale-[1.02] transition-all';
  const navButtonLeft = "text-start md:text-end";
  const navButtonRight = "text-start";
  return <div className='flex gap-3 flex-col md:flex-row mt-5 pt-6 items-center border-0 border-t border-solid border-slate-300 dark:border-slate-700'>
    {metadata.previous ? <Link to={metadata.previous.permalink} className={`${navButtonClasses} ${navButtonLeft}`}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <div>
        <div className="uppercase text-xs">Edellinen</div>
        <div className="text-base">{metadata.previous.title}</div>
      </div>
    </Link> : <div className="flex-1 md:me-auto"></div>}
    {metadata.next ? <Link to={metadata.next.permalink} className={`${navButtonClasses} ${navButtonRight}`}>
      <div>
        <div className="uppercase text-xs">Seuraava </div>
        <div className="text-base">{metadata.next.title}</div>
      </div>
      <FontAwesomeIcon icon={faArrowRight} />
    </Link> : <div className="flex-1 md:ms-auto"></div>}
  </div>;
}
