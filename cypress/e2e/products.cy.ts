describe('Product application test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('Visit PRODUCT application', async () => {
        cy.contains('Welcome to PRODUCT')
        cy.get('[data-testid="products"]').click()
        cy.get('[data-testid="detail-button-1011"]').click()
        cy.contains('Suzuki 2023')
        cy.get('[data-testid="cancel-button"]').click()

        cy.get('[data-testid="create-button"]').click();

        cy.get('[data-testid="name"]').type('Macbook')
        cy.get('[data-testid="categoryId"').select('2')
        cy.get('[data-testid="price"]').clear().type('2700')
        cy.get('[data-testid="create-item"').click();
        cy.get('[data-testid="home"]').click()
    });


})
