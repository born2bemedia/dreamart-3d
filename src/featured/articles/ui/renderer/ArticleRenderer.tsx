import type { Children } from '../../model/types';
import { ArticleStrategies } from '../strategies';

export const ArticleRenderer = ({ content }: { content: Children[] }) => (
  <>
    {!Array.isArray(content) ? null : (
      <>
        {content.map((node, i) => (
          <ArticleStrategies key={String(`node-${i}`)} node={node} type={node.type} />
        ))}
      </>
    )}
  </>
);
