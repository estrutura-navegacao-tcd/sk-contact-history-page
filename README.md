# Suki Doces

Aplicativo multiplataforma da Suki Doces, desenvolvido com Expo e React Native. O projeto apresenta a história da marca e reúne informações de contato em uma interface pensada para dispositivos móveis, com suporte também à Web.

## Funcionalidades

- **História da Suki Doces:** apresentação da marca e de seus marcos em uma linha do tempo.
- **Contato:** exibição dos canais de atendimento e formulário com validação de nome, telefone, e-mail e mensagem.
- **Navegação inferior:** acesso às telas disponíveis; as áreas de carrinho e perfil ainda estão indicadas como próximas etapas.

> **Estado do formulário:** os campos são validados localmente, mas o envio ainda não está conectado a uma API. A tela informa que a mensagem foi validada, não enviada.

## Tecnologias

- Expo SDK 58
- React Native 0.88
- React 19
- Expo Router
- TypeScript

## Requisitos

- Node.js e npm instalados
- Expo Go para executar no dispositivo móvel (ou um emulador Android/iOS)

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

3. Use o QR code exibido no terminal ou no navegador para abrir o aplicativo no Expo Go. Também é possível iniciar diretamente por plataforma:

   ```bash
   npm run android
   npm run ios
   npm run web
   ```

## Telas

| Caminho | Conteúdo |
| --- | --- |
| `/` | História da Suki Doces, com apresentação e linha do tempo |
| `/contact` | Canais de contato e formulário de mensagem |

## Estrutura do projeto

```text
src/
├── app/           # Rotas e layout principal do Expo Router
├── assets/        # Imagens e ícones
├── components/    # Componentes de contato, história, layout e interface
├── constants/     # Dados da loja, navegação, cores e conteúdo
├── hooks/         # Hooks de estado e comportamento
├── interfaces/    # Interfaces TypeScript
├── lib/           # Validação e utilitários
├── services/      # Integrações de serviços
└── types/         # Tipos compartilhados
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor Expo |
| `npm run android` | Inicia o Expo direcionado ao Android |
| `npm run ios` | Inicia o Expo direcionado ao iOS |
| `npm run web` | Inicia a versão Web |
