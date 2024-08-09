import { useBlogPost } from "@docusaurus/theme-common/internal";
import Translate, { translate } from "@docusaurus/Translate";

import BlogPostItemHeaderAuthor from "@theme/BlogPostItem/Header/Author";

import React from "react";

import clsx from "clsx";

import styles from "./styles.module.css";
// Component responsible for the authors layout
export default function BlogPostItemFooterAuthors({ className }) {
  const {
    metadata: { authors },
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const imageOnly = authors.every(({ name }) => !name);
  return (
    <>
      <span className="text-sm font-bold font-display uppercase mt-3 block mb-1">
        <Translate
          id="authors"
          description="The label alongside a list of tags in a blog post"
        />
      </span>
      <div
        className={clsx(
          " margin-bottom--sm bg-white shadow-lg rounded-lg p-3 dark:bg-silicon-900 col",
          imageOnly ? styles.imageOnlyAuthorRow : "row",
          className,
        )}
      >
        {authors.map((author, idx) => (
          <div
            className={clsx(
              !imageOnly && "col col--6 p-2",
              imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
            )}
            key={idx}
          >
            <BlogPostItemHeaderAuthor
              author={{
                ...author,
                // Handle author images using relative paths
                imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
