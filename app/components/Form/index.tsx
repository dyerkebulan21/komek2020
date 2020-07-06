import * as React from 'react';
import MaskedInput from 'react-text-mask';

interface IProps {
  type: 'canHelp' | 'needHelp';
}

const FormBlock: React.FC<IProps> = ({ type }) => {
  return (
    <form className="form">
      <div className="form-block">
        <label>
          Ваше имя/название организации <span className="remark"> *</span>
        </label>
        <input placeholder="Имя" />
      </div>
      <div className="form-block">
        <label>
          Ваш номер телефона <span className="remark"> *</span>
        </label>
        <MaskedInput
          mask={[
            '+',
            '7',
            ' ',
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
          ]}
          placeholder="+7 (777) 777-77-77"
        />
      </div>
      <div className="form-block">
        <label>
          Ваш город <span className="remark"> *</span>
        </label>
        <input placeholder="Алматы" />
      </div>
      <div className="form-block">
        <label>
          {type === 'canHelp'
            ? 'Что вы можете дать/чем можете помочь?'
            : 'Какая помощь вам необходима?'}
          <span className="remark"> *</span>
        </label>
        <textarea
          placeholder={`Например: ${
            type === 'canHelp' ? 'Могу дать парацетамол' : 'Нужен парацетамол'
          }`}
        />
      </div>

      <button className="form button" type="submit">
        Отправить
      </button>
    </form>
  );
};

export { FormBlock };
