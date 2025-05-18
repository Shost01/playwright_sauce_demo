# Projeto de Automação de Testes - Sauce Demo com Playwright

## Descrição
Este projeto contém uma suíte de testes automatizados para a aplicação web [Sauce Demo](https://www.saucedemo.com) utilizando Playwright.

## Tecnologias Utilizadas
- Node.js
- Playwright
- TypeScript
- Playwright Test Runner

## Estrutura do Projeto
- `pages/` - Contém os Page Objects que encapsulam as funcionalidades das páginas.
- `tests/` - Contém os testes automatizados organizados por funcionalidade.

## Casos de Teste Implementados
1. Login com credenciais válidas
2. Login com credenciais inválidas
3. Login com usuário bloqueado
4. Adicionar item ao carrinho
5. Remover item do carrinho
6. Verificar item no carrinho após adicionar
7. Verificar redirecionamento do botão checkout
8. Adicionar e remover itens repetidamente
9. Validação dos títulos dos produtos
10. Validação das descrições dos produtos
11. Validação do formato dos preços

## Como Rodar os Testes
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Instale o playwright `npx playwright install`
4. Execute os testes com `npx playwright test`

## Considerações Finais
O projeto segue boas práticas como Page Object Model, testes independentes e código limpo para facilitar manutenção e escalabilidade.
