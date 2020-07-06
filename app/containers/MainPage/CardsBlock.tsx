import * as React from 'react';
import { Card } from 'app/components/Card';

const cards = [
  {
    title: 'Мне нужна помощь',
    subtitle: '1. Нажмите на кнопку "Нужна помощь"',
  },
  {
    title: 'Я могу помочь',
    subtitle: '1. Нажмите на кнопку "Хочу помочь"',
  },
  {
    title: 'Общий список',
    subtitle:
      'В этой таблице есть общий список тех, кому нужна помощь и тех, кто может помочь.',
  },
];

const CardsBlock: React.FC = () => {
  return (
    <div className="cardsBlock">
      <div className="container">
        {cards.map((el, i) => (
          <Card card={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export { CardsBlock };
