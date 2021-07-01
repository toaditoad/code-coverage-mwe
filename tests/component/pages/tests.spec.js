import {mount} from '@cypress/vue';
import '@cypress/vue/dist/support';
import ClassComponentTypescriptPage from '../../../src/pages/ClassComponentTypescriptPage.vue';
import ClassComponentJavascriptPage from '../../../src/pages/ClassComponentJavascriptPage.vue';
import ComponentTypescriptPage from '../../../src/pages/ComponentTypescriptPage.vue';
import ComponentJavascriptPage from '../../../src/pages/ComponentJavascriptPage.vue';

describe('Tests', () => {
    it('ClassComponentTypescriptPage should render heading', () => {
        mount(ClassComponentTypescriptPage);
        cy.contains('ClassComponentTypescriptPage').should('be.visible');
    });

    it('ClassComponentJavascriptPage should render heading', () => {
        mount(ClassComponentJavascriptPage);
        cy.contains('ClassComponentJavascriptPage').should('be.visible');
    });

    it('ComponentTypescriptPage should render heading', () => {
        mount(ComponentTypescriptPage);
        cy.contains('ComponentTypescriptPage').should('be.visible');
    });

    it('ComponentJavascriptPage should render heading', () => {
        mount(ComponentJavascriptPage);
        cy.contains('ComponentJavascriptPage').should('be.visible');
    });

    it('ClassComponentTypescriptPage should increment counter', () => {
        mount(ClassComponentTypescriptPage);
        cy.get('.counter').should('contain', 0);
        cy.get('button').click();
        cy.get('.counter').should('contain', 1);
    });
});
