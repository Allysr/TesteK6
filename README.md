# Introdução aos testes de performance com k6

<h1 align="left">
    <img src="" width="250px">
</h1>

# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [ ] O cadastro com sucesso deve ocorrer em até 2 segundos
- [ ] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [ ] Deve poder cadastrar até 100 usuários simultâneos
- [ ] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias
- [k6] - ferramenta para teste de carga, performance, stress etc...



