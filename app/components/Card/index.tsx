import * as React from 'react';

interface IProps {
  card: {
    title: string;
    subtitle: string;
    subtitle1?: string;
  };
}

const Card: React.FC<IProps> = ({ card: { title, subtitle, subtitle1 } }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>
        <p>{subtitle}</p>
        {subtitle1 && <p>{subtitle1}</p>}
      </div>

      <button className="card-btn">Перейти</button>
    </div>
  );
};

export { Card };
