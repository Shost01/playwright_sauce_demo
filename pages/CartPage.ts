import { Page } from '@playwright/test';

export class CartPage {
    private page: Page;

    // Seletor para todos os itens no carrinho
    private cartItems = '.cart_item';

    // Botão para prosseguir para o checkout
    private checkoutButton = '[data-test="checkout"]';

    constructor(page: Page) {
        this.page = page;
    }

    // Retorna a quantidade de itens atualmente no carrinho
    async getCartItemCount(): Promise<number> {
        return await this.page.locator(this.cartItems).count();
    }

    // Verifica se um item específico (pelo nome) está presente no carrinho
    async isItemIncart(itemName: string): Promise<boolean> {
        return await this.page.locator('.inventory_item_name', { hasText: itemName }).isVisible();
    }

    // Clica no botão para prosseguir para a etapa de checkout
    async procedToCheckout(): Promise<void> {
        await this.page.click(this.checkoutButton);
    }
}