import React from "react";
import { useEffect, useState } from "react";

import { useDoc } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faExternalLink, faLink, faPlus, faQuestion, faThumbsDown, faThumbsUp } from "@fortawesome/pro-solid-svg-icons";

import clsx from "clsx";
import moment from "moment";
import { Crisp } from "crisp-sdk-web";
import ReactGA from "react-ga4";

import CopyButton from "../../CodeBlock/CopyButton";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

export default function DocItemPaginator() {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  const { metadata } = useDoc();
  const [contributors, setContributors] = useState([]);
  const [feedback, setFeedback] = useState(false);
  const [lastCommit, setLastCommit] = useState({});
  const [firstCommit, setFirstCommit] = useState({});

  const currentLanguage = siteConfig.i18n.currentLocale || siteConfig.i18n.defaultLocale;
  moment.locale(currentLanguage);

  const authors = require("@site/static/authors.json");
  const pageAuthors = metadata?.frontMatter?.authors;

  const handleFeedback = (feedback) => {
    if (feedback === "dislike") {
      ReactGA.event({
        "category": "Feedback",
        "action": "Dislike",
        "label": metadata.title
      });
      setTimeout(() => {
        Crisp.message.showText("Hei! 👋\n\nIkävä kuulla, ettei artikkelista ollut apua. Voisinko olla jotenkin avuksi?");
      }, 1000);
    } else if (feedback === "like") {
      ReactGA.event({
        "category": "Feedback",
        "action": "Like",
        "label": metadata.title
      });
    }
    setFeedback(feedback);
  }


  useEffect(() => {
    let contributors = [];
    for (let i = 0; i < pageAuthors?.length; i++) {
      contributors.push(
        authors[pageAuthors[i]]
      )
    }

    setContributors({
      "contributors_count": contributors.length || 0,
      "contributors": contributors
    })

  }, [metadata])

  const navButtonClasses = "flex flex-1 items-center justify-between gap-3  md:ms-auto text-start border border-solid border-slate-100 p-3 px-4 rounded-xl bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-silicon-200 shadow-lg text-blue-800 hover:no-underline hover:scale-[1.02] transition-all";
  const navButtonLeft = "text-start md:text-end";
  const navButtonRight = "text-start";

  return <div className="mt-20">
    <div className="flex w-full gap-4 mt-6">
      <div className="flex flex-col justify-center">
        {!feedback && <>
          <strong className="mb-1 block opacity-75 text-base">Mielipiteesi ohjeesta</strong>
          <div className="flex flex-wrap gap-2">
            <button className={clsx(styles.footerButton, "hover:scale-110 cursor-pointer")} onClick={e => handleFeedback("like")}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button className={clsx(styles.footerButton, "hover:scale-110 cursor-pointer")} onClick={e => handleFeedback("dislike")}>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
        </>}
        {feedback && <div className="flex flex-col leading-5">
          <div>Kiitos palautteestasi!</div>
          <div><Link to="https://github.com/bittivirta/docs/issues" target="_blank">Ilmoita ongelmasta <FontAwesomeIcon icon={faExternalLink} /></Link></div>
        </div>}
      </div>
      <div className="hidden md:block border-0 border-e border-solid border-slate-300 dark:border-slate-700  p-3 pe-5" />
      <div className="flex-1 hidden md:block">
        <strong className="mb-1 block opacity-75 text-base">Sivun tekijät</strong>
        <div className="flex flex-wrap ps-1">
          {contributors?.contributors_count > 0 ? contributors?.contributors.map(contributor => (
            <Link to={contributor.link || "#"} key={"contributor-" + contributor.name}>
              <div target="_blank" rel="noopener noreferrer" className={clsx(styles.footerButton, "group -ms-2")}>
                <img src={contributor.avatar} alt={contributor.name} width={40} className="rounded-full" />
                <div role="tooltip" className={clsx(styles.tooltip, "group-hover:opacity-100")}>
                  <span>{contributor.name}</span>
                </div>
              </div>
            </Link>
            
          )) :
            <div className={clsx(styles.footerButton, "group -ms-1")}>
              <FontAwesomeIcon icon={faQuestion} />
              <div role="tooltip" className={clsx(styles.tooltip, "group-hover:opacity-100")}>
                <span>Ei tietoa tekijöistä</span>
              </div>
            </div>
          }
          <Link to={metadata.editUrl} target="_blank" className={clsx(styles.footerButton, "group ms-2")}>
            <FontAwesomeIcon icon={faPlus} />
            <div role="tooltip" className={clsx(styles.tooltip, "group-hover:opacity-100")}>
              <span>Sinä?</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:block border-0 border-e border-solid border-slate-300 dark:border-slate-700 p-3 pe-5" />
      <div className="flex-1 text-end">
        <strong className="mb-1 block opacity-75 text-base">Jaa tämä artikkeli</strong>
        <div className="flex justify-end gap-2">
          <CopyButton code={metadata.permalink} icon={faLink} className={clsx(styles.footerButton, "group hover:scale-110")} />
          <Link to={`https://www.facebook.com/sharer/sharer.php?u=${metadata.permalink}`} className={clsx(styles.footerButton, "group hover:scale-110")}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to={`https://x.com/intent/tweet?text=${metadata.permalink}`} className={clsx(styles.footerButton, "group hover:scale-110")}>
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </div>
      </div>
    </div>

    <div className="flex gap-3 flex-col md:flex-row mt-6">
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
    </div>
  </div>;
}
