import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';


import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // Maneira 2 - se o input estiver vazio ele vai colocar como - false, se estiver preenchido - true.
    setIsField(!!inputRef.current?.value); // !! = transoformando algo para boolean

    // maneira 1 de validar se tem algum dado no input para que o ícone fique laranja
    /*if (inputRef.current?.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }*/
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container isField={isField} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input;