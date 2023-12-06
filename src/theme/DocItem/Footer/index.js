import { useEffect, useState } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faLink, faPlus, faQuestion, faThumbsDown, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CopyButton from '../../CodeBlock/CopyButton';
import { faFacebook, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterWrapper(props) {
  const { metadata } = useDoc();
  const [contributors, setContributors] = useState([]);
  const [feedback, setFeedback] = useState(false);

  const handleFeedback = (feedback) => {
    setFeedback(feedback);
  }

  useEffect(() => {
    console.log(metadata?.source?.replace("@site/", "") || "README.md")
    fetch(`https://api.github.com/repos/bittivirta/docs/commits?${new URLSearchParams({ "path": metadata?.source?.replace("@site/", "") || "README.md" })}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    }).then(response => response.json()).then(data => {
      data = data.map(commit => ({
        "author": commit.commit.author.name,
        "author_url": commit.author.html_url,
        "author_username": commit.author.login,
        "author_avatar": commit.author.avatar_url,
      }));
      data = data.reduce((acc, cur) => {
        if (!acc.find(item => item.author_username === cur.author_username)) {
          acc.push(cur);
        }
        return acc;
      }, []);
      data = {
        "contributors_count": data.length,
        "contributors": data
      }
      setContributors(data);
    });
  }, [metadata])
  return (
    <>
      <div className='mt-20 flex w-full gap-4'>
        <div className="flex flex-col justify-center">
          {!feedback && <>
            <strong className='mb-1 block opacity-75 text-base'>Mielipiteesi ohjeesta</strong>
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
        <div className='hidden md:block border-0 border-e border-solid border-slate-300 p-3 pe-5' />
        <div className='flex-1 hidden md:block'>
          <strong className='mb-1 block opacity-75 text-base'>Sivun tekijät</strong>
          <div className="flex flex-wrap ps-1">
            {contributors?.contributors_count > 0 ? contributors?.contributors.map(contributor => (
              <div key={"contributor-" + contributor.author_username}>
                <Link to={contributor.author_url} target="_blank" rel="noopener noreferrer" className={clsx(styles.footerButton, "group -ms-1")}>
                  <img src={contributor.author_avatar} alt={contributor.author_username} width={40} className='rounded-full' />
                  <div role="tooltip" className={clsx(styles.tooltip, "group-hover:opacity-100")}>
                    <span>{contributor.author_username}</span>
                  </div>
                </Link>
              </div>
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
        <div className='hidden md:block border-0 border-e border-solid border-slate-300 p-3 pe-5' />
        <div className='flex-1 text-end'>
          <strong className='mb-1 block opacity-75 text-base'>Jaa tämä artikkeli</strong>
          <div class="flex justify-end gap-2">
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
    </>
  );
}
