import React, { useCallback, useRef, useContext } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/logo.svg';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { AuthContext } from '../../context/AuthContext';

import { Container, Content, Background } from './styles';


interface SingInFormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, singIn } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = useCallback(async (data: SingInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false, // = vai retorna todos os erros juntos
      });

      console.log(data);

      singIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
      console.log(err);
    }
  }, [singIn]);
  console.log(formRef);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="#">
          <FiLogIn />
          Criar conta
          </a>
      </Content>

      <Background />
    </Container>
  );
}

export default SingIn;