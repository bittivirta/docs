import React from 'react';
import Image from "@theme/IdealImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faTag } from '@fortawesome/pro-solid-svg-icons';



const Footer = () => {
  const version = require('../../../package.json').version || "0.0.0";
  const info = require("../../../.tmp/info.json")

  return (
    <footer className="bg-slate-800 text-blue-100">
      <div className="container py-10">
        <div className="flex gap-10 items-center justify-between">
          <Image img="https://cdn.bittivirta.fi/logo/logo-light.svg" height={40} />
          <div className='text-end'>
            <p className='m-0 mb-1 opacity-80'><small>Copyright © Bittivirta - All rights reserved</small></p>
            <p className='m-0 flex gap-2 justify-end'>
              <span><FontAwesomeIcon icon={faCodeBranch} /> {info.branch == "master" ? "main" : info.branch}</span>
              <span><FontAwesomeIcon icon={faTag} /> {version}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer);
