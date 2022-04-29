import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup
    .string()
    .min(6, "A senha deve ter ao menos 6 dígitos")
    .required("Informe a senha"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "A senha de confirmação não confere"),
});

export function Form() {

  function handleUserRegister() {

  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ControlledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
      />
      <ControlledInput
        name="password_confirm"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
