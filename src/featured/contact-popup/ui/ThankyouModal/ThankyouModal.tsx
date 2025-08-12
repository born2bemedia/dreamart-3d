'use client';

import { useTranslations } from 'next-intl';

import { CloseIcon } from '@/shared/ui/icons';

import { useRequestStore } from '../../store/requestStore';
import styles from './ThankyouModal.module.scss';

export const ThankyouModal = () => {
  const { isSuccess, close, setIsSuccess } = useRequestStore();
  const t = useTranslations('request');

  const handleClose = () => {
    close();
    setTimeout(() => {
      setIsSuccess(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  return (
    <div className={`${styles.modal} ${isSuccess ? styles.visible : ''} ${styles.success}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close} onClick={handleClose}>
          <CloseIcon />
        </div>
        <h2>
          {t('successTitle', {
            fallback: '¡Gracias!',
          })}
        </h2>
        <p>
          {t('successDescription', {
            fallback:
              'Agradecemos que te pongas en contacto con nosotros. Nuestro equipo está emocionado de ayudarte a dar el primer paso hacia el logro de tus objetivos de trading. ¡Nos pondremos en contacto pronto!',
          })}
        </p>
      </div>
    </div>
  );
};
