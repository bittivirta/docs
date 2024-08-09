import Link from "@docusaurus/Link";

import React from "react";

import clsx from "clsx";
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <div className={clsx("avatar", className)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img className="avatar__photo" src={imageURL} alt={name} />
        </MaybeLink>
      )}

      {name && (
        <div className="avatar__intro">
          <div className="avatar__name">
            <MaybeLink href={link}>
              <span>{name}</span>
            </MaybeLink>
          </div>
          {title && <small className="avatar__subtitle">{title}</small>}
        </div>
      )}
    </div>
  );
}
