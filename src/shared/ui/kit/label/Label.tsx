import styles from './Label.module.scss';

export const Label = ({
  text,
  className,
  tag = 'span',
}: {
  text: string;
  className?: string;
  tag?: 'span';
}) => {
  const Tag = tag;
  return (
    <Tag className={`${styles.label} ${className}`} dangerouslySetInnerHTML={{ __html: text }} />
  );
};
