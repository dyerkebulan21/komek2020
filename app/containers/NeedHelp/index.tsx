import * as React from 'react';
import { FormBlock } from 'app/components/Form';

const NeedHelp = () => {
  return (
    <div className="needHelp">
      <div className="needHelp-top asCard">
        <h1 className="needHelp-title">Форма для тех, кому нужна помощь</h1>
        <p className="needHelp-subtitle">
          Заполните форму максимально подробно и перепроверьте перед отправкой.
          <br />
          ПРОСЬБА: Отправлять форму однажды
        </p>
        <span className="remark">* Обязательно</span>
      </div>

      <div className="needHelp-form asCard">
        <FormBlock type="needHelp" />
      </div>
    </div>
  );
};

export { NeedHelp };
