[# Projeto de Automação de Testes - Sauce Demo com Playwright

## 📝 Descrição
Este projeto contém uma suíte de testes automatizados para a aplicação web [Sauce Demo](https://www.saucedemo.com), utilizando o framework Playwright. O objetivo é validar funcionalidades críticas da aplicação como login, manipulação de carrinho e exibição correta de produtos.

## 🧰 Tecnologias Utilizadas
- Node.js
- Playwright
- TypeScript
- Playwright Test Runner

## 📁 Estrutura do Projeto
- `pages/` - Contém os Page Objects que encapsulam as interações com as páginas.
- `tests/` - Contém os testes automatizados divididos por funcionalidades.

## ✅ Casos de Teste Implementados
1. Login com credenciais válidas  
2. Login com credenciais inválidas  
3. Login com usuário bloqueado  
4. Adicionar item ao carrinho  
5. Remover item do carrinho  
6. Verificar redirecionamento do botão "Checkout"  
7. Adicionar e remover itens repetidamente  
8. Validação dos títulos dos produtos  
9. Validação das descrições dos produtos  
10. Validação do formato dos preços  

## 🚀 Como Rodar os Testes

1. **Clone o repositório**
```bash
https://github.com/Shost01/playwright_sauce_demo.git
cd playwright_sauce_demo
```
2. Instale as dependências com `npm install`
3. Instale o playwright `npx playwright install`
4. Execute os testes com `npx playwright test`

## Considerações Finais
O projeto foi desenvolvido utilizando o padrão Page Object Model, mantendo os testes organizados, reutilizáveis e de fácil manutenção. Todos os testes são independentes e automatizados de forma robusta, garantindo cobertura essencial da aplicação.
](https://github.com/Shost01/playwright_sauce_demo.git)
