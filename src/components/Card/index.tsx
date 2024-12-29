'use client';

import { cn } from '@/utilities/cn';
import useClickableCard from '@/utilities/useClickableCard';
import Link from 'next/link';
import React, { Fragment } from 'react';

import type { Post } from '@/payload-types';

import { Media } from '@/components/Media';

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>;

export const Card: React.FC<{
  alignItems?: 'center';
  className?: string;
  doc?: CardPostData;
  relationTo?: 'posts';
  showCategories?: boolean;
  title?: string;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props;

  const { slug, categories, meta, title } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, ' '); // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`;

  return (
    <article
      className={cn(
        'border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-video bg-gray-100">
        {!metaImage && (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            No Image Available
          </div>
        )}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="33vw" />
        )}
      </div>
      <div className="p-6">
        {showCategories && hasCategories && (
          <div className="uppercase text-xs font-semibold text-gray-600 mb-3">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category;

                const categoryTitle = titleFromCategory || 'Untitled Category';
                const isLast = index === categories.length - 1;

                return (
                  <Fragment key={index}>
                    {categoryTitle}
                    {!isLast && <Fragment>,&nbsp;</Fragment>}
                  </Fragment>
                );
              }
              return null;
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
            <Link href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="mt-3 text-sm text-gray-700">
            {sanitizedDescription}
          </p>
        )}
      </div>
    </article>
  );
};
