'use client';

import st from './List.module.scss';

export const List = ({ values }: { values: string[] }) => {
  return (
    <ul className={st.list}>
      {values.map((v) => (
        <li key={v} className={st.list__item}>
          {v}
        </li>
      ))}
    </ul>
  );
};
