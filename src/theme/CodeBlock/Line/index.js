import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CopyButton from '@theme/CodeBlock/CopyButton';
export default function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps,
}) {
  if (line.length === 1 && line[0].content === '\n') {
    line[0].content = '';
  }
  const lineProps = getLineProps({
    line,
    className: clsx(classNames, styles.line, showLineNumbers && styles.codeLine),
  });
  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({ token, key })} />
  ));
  const lineText = line.map((token, key) => token.content).join('')
  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className={styles.codeLineNumber} />
          <span className={styles.codeLineContent}>{lineTokens}</span>
          <span className={styles.codeLineCopy}><CopyButton className={styles.codeButton} code={lineText} /></span>
        </>
      ) : (
        <>
          <span className={styles.codeLineContent}>{lineTokens}</span>
          <span className={styles.codeLineCopy}><CopyButton className={styles.codeButton} code={lineText} /></span>
        </>
      )}
      <br />
    </span>
  );
}
