import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

// Conjunto de testes relacionados ao carrinho de compras
test.describe('Cart Test', () => {
    test('Adicionar item ao carrinho e verificar no carrinho', async ({ page }) => {

        // Instancia as páginas
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.navigate();
        await login.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/.*inventory/);

        // Adiciona item ao carrinho e navega até ele
        await inventory.addProductToCart('sauce-labs-backpack');
        await inventory.goToCart();

        // Verifica se está na URL do carrinho
        await expect(page).toHaveURL(/.*cart/);

        // Verifica se o item está visível no carrinho
        const itemVisivel = await cart.isItemInCart('Sauce Labs Backpack');
        expect(itemVisivel).toBeTruthy();

        // Verifica se há exatamente 1 item no carrinho
        const count = await cart.getCartItemCount();
        expect(count).toBe(1)
    });

    test('Remover um item do carrinho e verificar a atualização', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.navigate();
        await login.login('standard_user', 'secret_sauce');
        await inventory.addProductToCart('sauce-labs-backpack');
        await inventory.addProductToCart('sauce-labs-bolt-t-shirt');
        await inventory.goToCart();

        // Remove um dos produtos
        await inventory.removeProductFromCart('sauce-labs-backpack');

        // Verifica se restou apenas 1 item no carrinho
        const itemCount = await cart.getCartItemCount();
        expect(itemCount).toBe(1);

        // Verifica que o item removido não está mais visível
        const backpackVisible = await cart.isItemInCart('Sauce Labs Backpack');
        expect(backpackVisible).toBeFalsy();
    });

    test('Verificar redirecionamento do botão "Checkout"', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.navigate();
        await login.login('standard_user', 'secret_sauce');
        await inventory.addProductToCart('sauce-labs-backpack');
        await inventory.goToCart();

        // Clica no botão de checkout
        await cart.procedToCheckout();

        // Verifica redirecionamento para a página de checkout
        await expect(page).toHaveURL(/.*checkout-step-one/);
    });

    test('Adicionar e remover itens repetidamente', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await login.navigate();
        await login.login('standard_user', 'secret_sauce');


        // Adiciona e remove o mesmo item várias vezes
        for (let i = 0; i < 3; i++) {
            await inventory.addProductToCart('sauce-labs-backpack');
            await inventory.removeProductFromCart('sauce-labs-backpack');
        }

        await inventory.goToCart();

        // Verifica que o carrinho está vazio
        const itemCount = await cart.getCartItemCount();
        expect(itemCount).toBe(0);
    });
});