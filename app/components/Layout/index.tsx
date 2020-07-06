import * as React from 'react';
import { Header } from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export { Layout };
