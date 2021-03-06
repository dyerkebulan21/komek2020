import * as React from 'react';
import { Card } from 'app/components/Card';

const cards = [
  {
    title: 'Мне нужна помощь',
    subtitle: '1. Нажмите на кнопку "Нужна помощь"',
    subtitle1:
      '2. Заполните анкету Подробно распишите в чем вы нуждаетесь, какая помощь, лекарства, аппараты вам необходимы',
    path: '/needHelp',
  },
  {
    title: 'Я могу помочь',
    subtitle: '1. Нажмите на кнопку "Хочу помочь"',
    subtitle1:
      '2. Заполните анкету Максимально развернуто укажите чем вы можете помочь: лекарства, аппараты и любая другая форма помощи',
    path: '/canHelp',
  },
  {
    title: 'Общий список',
    subtitle:
      'В этой таблице есть общий список тех, кому нужна помощь и тех, кто может помочь.',
    path: '',
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
