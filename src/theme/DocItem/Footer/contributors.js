import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function FooterWrapper(props) {
  const [contributors, setContributors] = useState([]);

  const query = {
    "path": "README.md"
  };

  useEffect(() => {
    fetch(`https://api.github.com/repos/bittivirta/docs/commits?${new URLSearchParams(query)}`, {
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
  })

  return (
    <>
      <div className='mt-20'>
        <strong className='uppercase mb-1 block opacity-75'><Translate id="docs.page-contributors" /></strong>
        <div className="flex flex-wrap">
          {contributors?.contributors && contributors?.contributors.map(contributor => (
            <Link to={contributor.author_url} target="_blank" rel="noopener noreferrer" className="bg-white shadow-xs  flex items-center p-1 rounded-full">
              <img src={contributor.author_avatar} alt={contributor.author_username} width={30} className='rounded-full' />
              <span className='text-base px-3 text-primary-900 hover:text-primary'>{contributor.author}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
