/// <reference types="cypress" />

const NEW_TEXT = '[data-testid=newText]';
const NEW_SOURCE = '[data-testid=newSource]';
const ADD_BUTTON = '[data-testid=addButton]';

describe('The Quotes Application', () => {
  describe('Initial state of app', () => {
    before(() => {
      cy.visit('http://localhost:4200/memorable-quotes-v3-tests');
    });

    it('Should display the app', () => {
      cy.title().should('equal', 'Standard Examples');
    });

    it('Should have 4 rows initially', () => {
      cy.get('tbody tr').should('have.length', 4);
    });

    it('Should have a default quote in the input boxes', () => {
      cy.get(NEW_TEXT).should('have.value', 'Get to the chappa!');

      cy.get(NEW_SOURCE).should(input => {
        expect(input.val()).to.equal('Colonel Matrix');
      });
    });
  });

  describe('Adding a new quotation', () => {
    it('Adds a new quotation', () => {
      cy.get(NEW_TEXT).clear().type('New Quote 1');
      cy.get(NEW_SOURCE).clear().type('New Source 1');

      cy.get(ADD_BUTTON).click();
    });

    it('Has a new row with the new quotation', () => {
      cy.get('tbody tr').should('have.length', 5);
      cy.get('tbody tr:last')
        .find('td')
        .should(columns => {
          const contents = columns
            .map((index, element) => element.textContent)
            .get();
          expect(contents).to.eql(['New Source 1', 'New Quote 1']);
        });
    });
  });

  describe('Simulated loading data', () => {
    function stubRequest(): void {
      cy.server({
        method: 'GET',
        delay: 10,
        status: 200,
        response: {}
      });

      cy.route('assets/data/quotes.json', [
        {source: 'AAA', text: 'BBB'},
        {source: 'CCC', text: 'DDD'},
      ]);
    }

    function getColumns(): Cypress.Chainable<string[]> {
      return cy.get('tbody tr td')
        .then(columns => columns
          .map((index, element) => element.textContent)
          .get().map(x => x.trim())
        );
    }

    before(() => {
      stubRequest();

      cy.visit('http://localhost:4200/memorable-quotes-v3-tests');
    });

    it('Reads initial quotes from assets', () => {
      cy.get('tbody tr')
        .should('have.length', 2);

      getColumns().should(columns => {
        expect(columns).to.eql([
          'AAA', 'BBB',
          'CCC', 'DDD'
        ]);
      });
    });
  });
});
