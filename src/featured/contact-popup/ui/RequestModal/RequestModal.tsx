'use client';

import { useTranslations } from 'next-intl';

import { CloseIcon } from '@/shared/ui/icons';

import { useRequestStore } from '../../store/requestStore';
import { RequestForm } from '../RequestForm/RequestForm';
import styles from './RequestModal.module.scss';

export const RequestModal = () => {
  const { isOpen, close, isSuccess, setIsSuccess } = useRequestStore();
  const t = useTranslations('request');

  const handleClose = () => {
    close();
    setTimeout(() => {
      setIsSuccess(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  if (isSuccess) {
    return (
      <div className={`${styles.modal} ${isOpen ? styles.visible : ''} ${styles.success}`}>
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
  }

  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : ''}`}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close} onClick={handleClose}>
          <CloseIcon />
        </div>
        <div className={styles.modal__row}>
          <div>
            <h2>
              {t('title', {
                fallback: 'Póngase en Contacto con Nosotros',
              })}
            </h2>
            <p>
              {t('description', {
                fallback:
                  '¡Estamos ansiosos por conectarnos contigo! Rellena el formulario a continuación, y uno de nuestros miembros del equipo se pondrá en contacto contigo para discutir cómo podemos ayudarte en tu camino de trading:',
              })}
            </p>
          </div>
          <RequestForm />
        </div>
      </div>
    </div>
  );
};
