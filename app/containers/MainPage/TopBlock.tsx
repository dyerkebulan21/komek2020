import * as React from 'react';

const TopBlock: React.FC = () => {
  return (
    <div className="topBlock">
      <div className="container">
        <div className="topBlock-info">
          <h1>Важен вклад каждого!</h1>
          <p>
            Мы призываем включится всех и создавать каждому вокруг себя очаги
            помощи.
          </p>
          <p>
            В этой ситуации находятся все без исключения, поэтому важна
            инициатива каждого.
          </p>
        </div>

        <img className="topBlock-img" src="/images/main-top.svg" alt="" />
      </div>
    </div>
  );
};

export { TopBlock };
