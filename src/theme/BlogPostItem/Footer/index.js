import { useBlogPost } from "@docusaurus/theme-common/internal";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Translate, { translate } from "@docusaurus/Translate";

import EditMetaRow from "@theme/EditMetaRow";
import TagsListInline from "@theme/TagsListInline";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";

import React from "react";

import clsx from "clsx";
export default function BlogPostItemFooter() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const {
    tags,
    title,
    editUrl,
    hasTruncateMarker,
    lastUpdatedBy,
    lastUpdatedAt,
  } = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  if (!renderFooter) {
    return null;
  }
  // BlogPost footer - details view
  if (isBlogPostPage) {
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    console.log(tags);
    return (
      <>
        <footer className="docusaurus-mt-lg">
          {tagsExists && (
            <div
              className={clsx(
                "row",
                "margin-top--sm",
                ThemeClassNames.blog.blogFooterEditMetaRow,
              )}
            >
              <div className="col">
                <span className="text-sm font-bold font-display uppercase block mb-1">
                  <Translate
                    id="theme.tags.tagsListLabel"
                    description="The label alongside a list of tags in a blog post"
                  />
                </span>
                <div className="flex gap-1 flex-wrap">
                  {Object.entries(tags).map(([key, tag]) => (
                    <span
                      key={key}
                      className="bg-white rounded p-1 px-3 text-sm shadow-sm"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {canDisplayEditMetaRow && (
            <EditMetaRow
              className={clsx(
                "margin-top--sm",
                ThemeClassNames.blog.blogFooterEditMetaRow,
              )}
              editUrl={editUrl}
              lastUpdatedAt={lastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
            />
          )}
        </footer>
        <BlogPostItemHeaderAuthors />
      </>
    );
  }
  // BlogPost footer - list view
  else {
    return (
      <footer className="row docusaurus-mt-lg">
        {tagsExists && (
          <div className={clsx("col", { "col--9": truncatedPost })}>
            <TagsListInline tags={tags} />
          </div>
        )}
        {truncatedPost && (
          <div
            className={clsx("col text--right", {
              "col--3": tagsExists,
            })}
          >
            <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
          </div>
        )}
      </footer>
    );
  }
}
