import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import './Select.scss';
import { Noop } from 'react-hook-form';

interface SelectProps {
  className?: string;
  id: string;
  error: string | undefined;
  onChange: (...event: []) => void;
  onBlur: Noop;
  options: { id: string; gender: string }[];
}

const Select: FC<SelectProps> = ({
  className = '',
  error,
  onChange,
  options,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState({
    id: '',
    gender: '',
  });

  const classProps = classNames('select', className);
  const buttonClass = classNames('select__button', {
    open: isOpen,
    selected: value.id.length > 0,
    error: !!error,
  });
  const selectClass = classNames('select__inner', { open: isOpen });

  const handleButtonClick = async (el: { id: string; gender: string }) => {
    await setValue(() => el);
    await setIsOpen(() => false);
    inputRef?.current?.dispatchEvent(new Event('input', { bubbles: true }));
  };

  return (
    <>
      <div className={classProps}>
        <button
          className={buttonClass}
          type="button"
          onClick={() => setIsOpen((el) => !el)}
        >
          {value.id.length > 0 ? value.gender : 'Your gender'}
          <input
            type="hidden"
            value={value.id}
            onInput={onChange}
            ref={inputRef}
            {...rest}
          />
        </button>
        {isOpen && (
          <div className={selectClass}>
            {options.map((el) => (
              <button
                key={el.id}
                className="select__inner__button"
                type="button"
                onClick={() => handleButtonClick(el)}
              >
                {el.gender}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && <p className="select__errorText">{error}</p>}
    </>
  );
};

export default Select;
