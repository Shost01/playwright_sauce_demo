import { Locator, Page } from '@playwright/test';

export class ProductPage {
    private page: Page;

    // Seletores para os títulos e descrições dos produtos
    private productTitles: Locator;
    private productDescriptions: Locator;
    private productPrices: Locator;

    constructor(page: Page) {
        this.page = page;

        // Inicializa os Locators ao instanciar a classe
        this.productTitles = page.locator('.inventory_item_name');
        this.productDescriptions = page.locator('.inventory_item_description');
        this.productPrices = page.locator('.inventory_item_price');
    }

    // Retorna os títulos de todos os produtos exibidos na página
    async getProductTitle(): Promise<string[]> {
        return await this.productTitles.allTextContents();
    }

    // Retorna as descrições de todos os produtos exibidos na página
    async getProductDescriptions(): Promise<string[]> {
        return await this.productDescriptions.allTextContents();
    }

    // Retorna os valores de todos os produtos exibidos na página
    async getProductPrices() {
        return await this.productPrices.allTextContents();
    }
}