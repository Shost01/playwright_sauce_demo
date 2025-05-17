import { Page } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    // Seletor do ícone/carrinho de compras no topo da página
    private cartIcon = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    // Adiciona um produto ao carrinho com base no ID do produto
    async addProductToCart(productId: string): Promise<void> {
        await this.page.click(`#add-to-cart-${productId}`);
    }

    // Remove um produto do carrinho com base no ID do produto
    async removeProductFromCart(productId: string): Promise<void> {
        await this.page.click(`#remove-${productId}`);
    }


    // Navega para a página do carrinho
    async goToCart(): Promise<void> {
        await this.page.click(this.cartIcon);
    }
}
