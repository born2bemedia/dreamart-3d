import type { Children } from '../../model/types';
import { PolicyStrategies } from '../strategies';

export const PolicyRenderer = ({ content }: { content: Children[] }) => (
  <>
    {!Array.isArray(content) ? null : (
      <>
        {content.map((node, i) => (
          <PolicyStrategies key={String(`node-${i}`)} node={node} type={node.type} />
        ))}
      </>
    )}
  </>
);
