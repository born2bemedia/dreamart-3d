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

  // if (type === 'list') {
  //   return (
  //     <ul
  //       key={`${node.type}-${type}`}
  //       className={cn(
  //         'mt-4 ml-3.5 text-[#272727]',
  //         node.listType === 'bullet' ? 'list-disc' : 'list-decimal'
  //       )}
  //     >
  //       {node.children?.map((item, i) => (
  //         <li key={`li-${i}`}>
  //           <ListItem value={item.children} />
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  return null;
});

ArticleStrategies.displayName = 'ArticleStrategies';

// const ListItem = ({ value }: { value?: Children2[] }) => {
//   if (!value) return null;

//   return value.map((item, i) => {
//     if (item.type === 'link') {
//       return (
//         <a key={`link-${i}`} href={item.fields?.url} target="_blank" rel="noopener noreferrer">
//           {item.children?.map((child, j) => (
//             <span
//               key={`link-text-${j}`}
//               className="text-sm font-bold text-[#272727] underline decoration-solid underline-offset-auto"
//             >
//               {child.text}
//             </span>
//           ))}
//         </a>
//       );
//     }

//     return (
//       <span
//         key={`list-text-${i}`}
//         className={cn('text-sm text-[#272727]', item.format === 1 && 'font-bold')}
//       >
//         {item.text}
//       </span>
//     );
//   });
// };
