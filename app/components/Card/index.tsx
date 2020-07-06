import * as React from 'react';
import Link from 'next/link';

interface IProps {
  card: {
    title: string;
    subtitle: string;
    subtitle1?: string;
    path: string;
  };
}

const Card: React.FC<IProps> = ({
  card: { title, subtitle, subtitle1, path },
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>
        <p>{subtitle}</p>
        {subtitle1 && <p>{subtitle1}</p>}
      </div>

      <Link href={path}>
        <button className="card-btn">Перейти</button>
      </Link>
    </div>
  );
};

export { Card };
