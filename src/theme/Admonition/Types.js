import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ResultAdmonition(props) {
  return (
    <div className='alert alert--secondary'>
      <h5 className='uppercase flex items-center gap-2 mb-3 text-[0.875rem]'><FontAwesomeIcon icon={["far", "square-poll-vertical"]} className='text-2xl' /> {props.title || "Result"}</h5>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'result': ResultAdmonition,
};

export default AdmonitionTypes;
