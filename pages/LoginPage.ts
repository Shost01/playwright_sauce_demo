import { Page } from '@playwright/test';

export class LoginPage {

    // Elementos da página de login
    private page: Page;
    private usernameInput = '#user-name';
    private passwordInput = '#password';
    private loginButton = '#login-button';
    private errorMessage = '[data-test="error]';

    // Construtor: recebe o objeto 'Page' do Playwright
    constructor(page: Page) {
        this.page = page;
    }

    // Navega para a página inicial
    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

     // Realiza login com as credenciais fornecidas
    async login(username: string, password: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    // Verifica se a mensagem de erro está visível na tela
    async isErrorVisible(): Promise<boolean> {
        return await this.page.isVisible(this.errorMessage);
    }
}