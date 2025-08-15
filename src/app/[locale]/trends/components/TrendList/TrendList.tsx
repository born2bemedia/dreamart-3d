'use client';

import st from './TrendList.module.scss';

import type { TrendPreview } from '@/featured/trends/model/types';
import { TrendPreviewCard } from '@/featured/trends/ui/сard';

export const TrendList = ({ trends }: { trends: TrendPreview[] }) => {
  return (
    <div className="_container">
      <section className={st.layout}>
        {trends.map((trend) => (
          <TrendPreviewCard key={trend.id} {...trend} />
        ))}
      </section>
    </div>
  );
};
