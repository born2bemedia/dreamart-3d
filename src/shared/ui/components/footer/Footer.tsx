'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { Facebook, Instagram, X } from '../../icons';
import styles from './Footer.module.scss';

//import { RequestForm } from '@/featured/contact-popup/ui/RequestForm/RequestForm';
//import { ThankyouModal } from '@/featured/contact-popup/ui/ThankyouModal/ThankyouModal';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={'_container-large'}>
        <div className={styles.footer__top}>
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" width={125} height={24} />
          </Link>
          <div className={styles.footer__top_links}>
            <div>
              <h3>
                {t('cultureTitle', {
                  fallback: 'Culture',
                })}
              </h3>
              <nav>
                <Link href="#">
                  {t('culture1', {
                    fallback: 'Work',
                  })}
                </Link>
                <Link href="/impact">
                  {t('culture2', {
                    fallback: 'Impact',
                  })}
                </Link>
                <Link href="#">
                  {t('culture3', {
                    fallback: 'Careers',
                  })}
                </Link>
              </nav>
            </div>
            <div>
              <h3>
                {t('offersTitle', {
                  fallback: 'Offers',
                })}
              </h3>
              <nav>
                <Link href="#">
                  {t('offers1', {
                    fallback: 'Services',
                  })}
                </Link>
                <Link href="/prices">
                  {t('offers2', {
                    fallback: 'Prices',
                  })}
                </Link>
                <Link href="/deals">
                  {t('offers3', {
                    fallback: 'Deals',
                  })}
                </Link>
              </nav>
            </div>
            <div>
              <h3>
                {t('connectTitle', {
                  fallback: 'Connect',
                })}
              </h3>
              <nav>
                <Link href="#">
                  {t('connect1', {
                    fallback: 'Trends',
                  })}
                </Link>
                <Link href="/contacts">
                  {t('connect2', {
                    fallback: 'Contacts',
                  })}
                </Link>
              </nav>
            </div>
            <div>
              <h3>
                {t('regulationsTitle', {
                  fallback: 'Regulations',
                })}
              </h3>
              <nav>
                <Link href="#">
                  {t('regulations1', {
                    fallback: 'Terms of Use',
                  })}
                </Link>
                <Link href="#">
                  {t('regulations2', {
                    fallback: 'Privacy Policy',
                  })}
                </Link>
                <Link href="#">
                  {t('regulations3', {
                    fallback: 'Cookie Policy',
                  })}
                </Link>
                <Link href="#">
                  {t('regulations4', {
                    fallback: 'Refund Policy',
                  })}
                </Link>
              </nav>
            </div>
            <div>
              <h3>
                {t('infoTitle', {
                  fallback: 'Info',
                })}
              </h3>
              <div className={styles.info}>
                <div>
                  <span>
                    {t('infoOfficeTitle', {
                      fallback: 'Office address:',
                    })}
                  </span>
                  <p>
                    {t('infoOfficeAddress', {
                      fallback: 'address',
                    })}
                  </p>
                </div>
                <div>
                  <span>
                    {t('infoRegisteredTitle', {
                      fallback: 'Registered address:',
                    })}
                  </span>
                  <p>
                    {t('infoRegisteredAddress', {
                      fallback: 'address',
                    })}
                  </p>
                </div>
                <div>
                  <Link href="mailto:example@gmail.com">example@gmail.com</Link>
                </div>
                <div>
                  <Link href="tel:+1 000 000 000">+1 000 000 000</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>
            {t('copyright', {
              year: year,
              fallback: '© {year} [COMPANY] All Legal Rights Reserved.',
            })}
          </p>
          <div className={styles.socials}>
            <Link href="#">
              <X />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
