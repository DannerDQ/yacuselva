import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import DropDown from '../drop-down';
import FacebookIcon from '../../icons/facebook';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <DropDown
          title="Sobre Yacu Selva"
          options={[
            {
              path: '/contact',
              slug: 'Comunícate con Nosotros',
            },
            {
              path: '/terms',
              slug: 'Términos y Condiciones',
            },
            {
              path: '/privacy',
              slug: 'Política de Privacidad',
            },
          ]}
        />
        <DropDown
          title="Únete a Yacu Selva"
          options={[
            {
              path: '/work/delivery',
              slug: 'Como Repartidor',
            },
            {
              path: '/work/promoter',
              slug: 'Como Promotor',
            },
            {
              path: '/work/point',
              slug: 'Como Punto de Venta',
            },
          ]}
        />
      </section>
      <section>
        <h4>Síguenos</h4>
        <ul className={styles.socialList}>
          <li className={styles.socialIcon}>
            <Link
              href="https://www.facebook.com/share/12ASkGeEMJW/"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
