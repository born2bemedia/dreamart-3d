'use client';

import { downloadFile } from '@/shared/lib/utils/download';
import { DownloadIcon } from '@/shared/ui/icons/download';

import stItems from '../../model/columns.module.scss';
import type { Order } from '../../model/types';
import { OrderStatus } from '../OrderStatus';
import st from './OrderCard.module.scss';

export const OrderCard = ({ orderDate, invoiceUrl, items, orderId, price, orderStatus }: Order) => {
  const date = new Date(orderDate);

  return (
    <section className={st.card}>
      <div className={st.section}>
        <p className={stItems.heading}>Order ID</p>
        <p className={stItems.text}>{orderId}</p>
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Item Purchased</p>
        <p className={stItems.text}>{items.join(', ')}</p>
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Purchase Date</p>
        <p className={stItems.text}>{date.toISOString().split('T')[0]}</p>
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Total</p>
        <p className={stItems.text}>{price}</p>
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Payment Method</p>
        <p className={stItems.text}>Bank Transfer</p>
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Order Status</p>
        <OrderStatus value={orderStatus} />
      </div>
      <span className={st.divider} />
      <div className={st.section}>
        <p className={stItems.heading}>Invoice</p>
        {invoiceUrl ? (
          <button onClick={() => downloadFile(invoiceUrl)}>
            <DownloadIcon />
            <p className={stItems.download}>Download</p>
          </button>
        ) : (
          <p className={stItems.text}>Not Available</p>
        )}
      </div>
    </section>
  );
};
