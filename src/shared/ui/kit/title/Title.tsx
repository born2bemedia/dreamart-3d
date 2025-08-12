import styles from './Title.module.scss';

export const Title = ({
  title,
  className,
  tag = 'h2',
}: {
  title: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) => {
  const Tag = tag;
  return (
    <Tag
      className={`${styles.title} ${styles[className as string]}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};
