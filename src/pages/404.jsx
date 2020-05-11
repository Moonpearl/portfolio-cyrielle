import React from 'react';
import { Layout, SEO } from '../components';
import { LocalizedContent } from '../components/localization';

const NotFoundPage = () =>
  <Layout>
    <SEO title="Page Not found" />
    <LocalizedContent>
      <div locale="en">
        <h1>Page Not Found</h1>
        <p>I still haven't drawn the page you requested...</p>
      </div>
      <div locale="fr">
        <h1>Page non trouvée</h1>
        <p>Je n'ai pas encore dessiné la page que vous avez demandée...</p>
      </div>
    </LocalizedContent>
  </Layout>
;

export default NotFoundPage;
