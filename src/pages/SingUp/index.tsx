import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles';

const SingUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha" />

          <Button type="submit">Entrar</Button>

        </Form>

        <a href="#">
          <FiArrowLeft />
        Voltar para logon
        </a>
      </Content>


    </Container>
  );
}

export default SingUp;