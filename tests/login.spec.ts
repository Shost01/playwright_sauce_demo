import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Suite de testes para a funcionalidade de login
test.describe('Login Tests', () => {

    test('Login com credenciais válidas', async ({ page }) => {
        // Instancia o Page Object e navega para a página
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // Realiza login com usuário e senha válidos
        await loginPage.login('standard_user', 'secret_sauce');

        // Verifica se foi redirecionado para a página correta após o login
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('Login com senha errada', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // Realiza login com senha inválida
        await loginPage.login('standard_user', '123456789');

        // Verifica se a mensagem de erro está visível
        expect(await loginPage.isErrorVisible()).toBeTruthy();
    });

    test('Login com usuario bloqueado', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // Tenta logar com um usuário bloqueado
        await loginPage.login('locked_out_user', 'secret_sauce');

        // Verifica se a mensagem de erro está visível
        expect(await loginPage.isErrorVisible()).toBeTruthy();
    });
})