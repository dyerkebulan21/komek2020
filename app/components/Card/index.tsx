import * as React from 'react';

const Card: React.FC<{ card: { title: string; subtitle: string } }> = ({
  card,
}) => {
  return (
    <div className="card">
      <h2>{card.title}</h2>
      <p>{card.subtitle}</p>
    </div>
  );
};

export { Card };
