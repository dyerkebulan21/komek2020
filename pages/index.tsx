import * as React from 'react';

import { Layout } from 'app/components/Layout';
import { MainPage } from 'app/containers/MainPage';

const Main: React.FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default Main;
