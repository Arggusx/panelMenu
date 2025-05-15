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
