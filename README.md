# Painel de Administração - Cardápio Online

Este repositório contém o painel de administração do sistema de cardápio online, permitindo que o administrador cadastre, edite e remova itens do cardápio exibido no site principal.

## Funcionalidades

- Login com autenticação para acesso restrito;
- Visualização e controle de pedidos recebidos;
- Atualização do status dos pedidos (Pendente, Em preparo, Pronto, Entregue);
- Geração de QR Code para pedidos prontos, que será enviado ao cliente via WhatsApp;
- Interface responsiva e intuitiva para uso em tempo real.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Arggusx/panelMenu.git
   
2. Acesse a pasta do projeto:

    `cd nome-do-repositorio`

3. Instale as dependências:

    `npm install`

4. Inicie o servidor de desenvolvimento:

    `npm start`

O painel estará disponível em `http://localhost:3000`.

## Observações

* Os dados dos pedidos são armazenados em um banco de dados acessado via API.

* Este repositório é exclusivo para o uso administrativo. O site de exibição do cardápio está em outro repositório.

* O administrador pode gerar um QR Code para pedidos prontos, que será enviado ao cliente via WhatsApp. O garçom validará o pedido escaneando o QR Code ao entregar o prato.
==============================================================================================================
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
