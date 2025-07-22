// components/index.tsx
import React from 'react';
import { t } from '@superset-ui/core';

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #dee2e6',
      paddingTop: '20px',
      paddingBottom: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#333',
    }}
  >
    <p>
      © {new Date().getFullYear()} Avedian Analytics |{' '}
      <a href="https://wiki.avedian.info/es/avedian/iso/PoliticaPrivacidadDatos">{t('Privacy Policy')}</a> |{' '}
      <a href="mailto:contacto@avediangrd.com">{t('Contact')}:</a> contacto@avediangrd.com
    </p>
  </footer>
);

export default Footer;
