import * as React from 'react';

const list = [
  { label: 'Мне нужна помощь' },
  { label: 'Я могу помочь' },
  { label: 'Общий список' },
];

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <h3 className="header-logo">#BIZBIRGEMIZ</h3>

        <ul className="header-menu">
          {list.map((el, i) => (
            <li key={i}>{el.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Header };
