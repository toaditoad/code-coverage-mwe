import {mount} from '@cypress/vue';
import '@cypress/vue/dist/support';
import FooPage from '../../../src/pages/FooPage.vue';

describe('FooPage component', () => {
    it('should render heading', () => {
        mount(FooPage);
        cy.contains('Foo Page').should('be.visible');
    });

    it('should increment counter', () => {
        mount(FooPage);
        cy.get('.counter').should('contain', 0);
        cy.get('button').click();
        cy.get('.counter').should('contain', 1);
    });
});
