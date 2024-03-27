import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/pro-solid-svg-icons';
export default function CopyButton({ code, className, icon }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef(undefined);
  const handleCopyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);
  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);
  return (
    <button
      type="button"
      aria-label={
        isCopied
          ? translate({
            id: 'theme.CodeBlock.copied',
            message: 'Copied',
            description: 'The copied button label on code blocks',
          })
          : translate({
            id: 'theme.CodeBlock.copyButtonAriaLabel',
            message: 'Copy code to clipboard',
            description: 'The ARIA label for copy code blocks button',
          })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={handleCopyCode}>
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <FontAwesomeIcon icon={icon ? icon : faCopy} className={clsx(styles.copyButtonIcon)} />
        <FontAwesomeIcon icon={faCheck} className={styles.copyButtonSuccessIcon} />
      </span>
    </button>
  );
}
