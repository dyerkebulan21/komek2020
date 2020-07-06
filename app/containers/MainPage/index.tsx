import * as React from 'react';
import { TopBlock } from './TopBlock';
import { CardsBlock } from './CardsBlock';

const MainPage: React.FC = () => {
  return (
    <div className="main">
      <TopBlock />
      <CardsBlock />
    </div>
  );
};

export { MainPage };
