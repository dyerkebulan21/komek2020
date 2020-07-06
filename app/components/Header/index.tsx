import * as React from 'react';
import Link from 'next/link';

const list = [
  { label: 'Мне нужна помощь', path: '/needHelp' },
  { label: 'Я могу помочь', path: '/canHelp' },
  { label: 'Общий список', path: '#' },
];

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <h3 className="header-logo">
          <Link href="/">
            <a>#BIZBIRGEMIZ</a>
          </Link>
        </h3>

        <ul className="header-menu">
          {list.map((el, i) => (
            <li key={i}>
              <Link href={el.path}>
                <a>{el.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Header };
