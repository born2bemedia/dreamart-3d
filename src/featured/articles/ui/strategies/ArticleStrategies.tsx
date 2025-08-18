'use client';

import { memo } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import type { Children } from '../../model/types';
import { isNumberHeading } from '../../model/utils';
import st from './ArticleStrategies.module.scss';

export const ArticleStrategies = memo(({ node, type }: { node: Children; type: string }) => {
  if (type === 'heading') {
    return (
      <h2 key={`${node.type}-${type}`}>
        {node.children?.map((item) => (
          <span
            key={item.text}
            id={item.text}
            className={cn(isNumberHeading(item.text ?? '') ? st.heading2 : st.heading1)}
          >
            {item.text}
          </span>
        ))}
      </h2>
    );
  }

  if (type === 'paragraph') {
    return (
      <div key={`${node.type}-${type}`}>
        <p className={st.text}>
          {node.children?.map((item, i) => {
            if (item.type === 'linebreak') {
              return <br key={`br-${i}`} />;
            }

            if (item.type === 'link') {
              return (
                <a
                  key={`link-${i}`}
                  href={item.fields?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={st.link}
                >
                  {item.children?.map((child, j) => (
                    <span key={`link-text-${j}`}>{child.text}</span>
                  ))}
                </a>
              );
            }

            return (
              <span key={`text-${i}`} className={cn(item.format === 1 && st.bold)}>
                {item.text}
              </span>
            );
          })}
        </p>
      </div>
    );
  }

  return null;
});

ArticleStrategies.displayName = 'ArticleStrategies';
