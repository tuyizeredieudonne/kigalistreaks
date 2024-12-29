import { cn } from 'src/utilities/cn';
import React from 'react';

import type { Post } from '@/payload-types';

import { Card, CardPostData } from '@/components/Card';

export type Props = {
  posts: CardPostData[];
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className={cn('container mx-auto px-6')}>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-1" key={index}>
                  <Card 
                    className="h-full shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white"
                    doc={result} 
                    relationTo="posts" 
                    showCategories 
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};
