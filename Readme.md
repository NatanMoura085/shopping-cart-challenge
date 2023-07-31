
# Projeto de Carrinho de Compras

Este é um projeto de carrinho de compras simples, onde os usuários podem visualizar produtos, adicioná-los ao carrinho, remover itens do carrinho e ver o total de pontos ganhos com a compra.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.
- React Router: Biblioteca para navegação e criação de rotas em aplicações React.
- Axios: Biblioteca para fazer requisições HTTP para o servidor.
- Context API: API de contexto do React para gerenciamento de estado global.
- Local Storage: Para armazenar o carrinho de compras localmente no navegador.

## Funcionalidades

- Visualizar lista de produtos disponíveis.
- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Aumentar ou diminuir a quantidade de um produto no carrinho.
- Ver o total de pontos acumulados com a compra.
- Receber um brinde bônus de acordo com o total de pontos.

## Como Rodar o Projeto

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Faça o clone deste repositório para o seu computador.
3. Navegue para o diretório do projeto e execute o comando `npm install` para instalar as dependências.
4. Em seguida, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
5. Acesse o projeto em `http://localhost:3000` no seu navegador.

## Estrutura de Arquivos

```
├── public/
│   ├── index.html
│   └── ... (outros arquivos públicos)
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── Header.jsx
│   │   ├── PageCheckout.jsx
│   │   ├── PageHome.jsx
│   │   ├── PageProdutos.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── CartProvider.jsx
│   │   └── CartContext.js
│   ├── hooks/
│   │   └──  useCurrencyConversion.jsx
|   |    └── useDollarRate.jsx
|   |    └──  useLocalStorage
│   ├
│   │  
│   ├── pages/
│   │   └── ... (páginas do projeto)
│   ├── App.js
│   ├── index.js
│   └── ... (outros arquivos principais)
├── .gitignore
├── package.json
└── README.md
```

## Autor

Natan Moura.



## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Agradecimentos

- Agradecimentos a qualquer recurso ou inspiração que você utilizou no projeto.

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie um branch para a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e faça um commit descrevendo suas mudanças: `git commit -m "Minha feature incrível"`.
4. Envie suas alterações para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request para este repositório.

## Contato

- Caso queira entrar em contato com o autor ou saber mais sobre o projeto, adicione informações de contato aqui.