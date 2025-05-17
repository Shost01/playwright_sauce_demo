import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

// Suite de testes relacionados à página de produtos
test.describe('Product Test', () => {
    test('Verifica se todos os nomes de produtos começam com "Sauce Labs"', async ({ page }) => {
        test.fail();

        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // Acessa a página de produtos e obtém os títulos
        const productPage = new ProductPage(page);
        const productTitle = await productPage.getProductTitle();

        // Verifica se todos os títulos começam com "Sauce Labs"
        for (const title of productTitle) {
            expect(title.startsWith('Sauce Labs')).toBeTruthy();
        }
    });

    test('Verifica se as descrições dos produtos estão corretas', async ({ page }) => {
        test.fail();

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // Obtém todas as descrições da tela
        const descriptions = await productPage.getProductDescriptions();

        // Lista com descrições esperadas dos produtos
        const expectedDescriptions = [
            'Carry all the things with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
            'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
            'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day of testing.',
            'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
            'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.'
        ];

        // Verifica se as descrições da tela contêm o conteúdo esperado
        for (let i = 0; i < expectedDescriptions.length; i++) {
            expect(descriptions[i]).toContain(expectedDescriptions[i])
        }
    });

    test('Verifica se os preços dos produtos estão visiveis e no formato correto', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        // Obtém a lista de preços de todos os produtos exibidos
        const prices = await productPage.getProductPrices();

        // Verifica se cada preço está no formato correto (ex: $29.99)
        for (const price of prices) {
            expect(price).toMatch(/^\$\d+\.\d{2}$/);
        }
    });
});
