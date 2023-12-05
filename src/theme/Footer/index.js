import React from 'react';
import Image from "@theme/IdealImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
  const version = require('../../../package.json').version;
  const info = require("../../../.tmp/info.json")

  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="container py-10">
        <div className="flex gap-10 items-center justify-between">
          <Image img="https://cdn.bittivirta.fi/brand/logo/light/logo.svg" height={40} />
          <div className='text-end'>
            <p className='m-0'>Copyright © Bittivirta - All rights reserved</p>
            <p className='m-0 flex gap-2 justify-end'>
              <span><FontAwesomeIcon icon={["fas", "code-branch"]} /> {info.branch}</span>
              <span><FontAwesomeIcon icon={["fas", "tag"]} /> {version}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer);
