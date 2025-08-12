import styles from './Text.module.scss';

export const Text = ({
  text,
  className,
  tag = 'p',
}: {
  text: string;
  className?: string;
  tag?: 'p' | 'span';
}) => {
  const Tag = tag;
  return (
    <Tag
      className={`${styles.text} ${styles[className as string]}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
