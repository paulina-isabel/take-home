describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f101fd01d12c42e2877136a41b1b404c', {
      statusCode: 200,
      fixture: 'allArticles.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should show all articles and form when on the homepage', () => {
    cy.location('pathname').should('eq', '/');
    cy.get('.navbar').should('exist');
    cy.get('form').should('exist');
    cy.get('.article-container').first().within(() => {
      cy.get('.title-author')
      cy.get('.article-img')
    })
    cy.get('.title-author').first().within(() => {
      cy.contains('h2', 'Sam Bankman');
      cy.contains('October 30, 2023 at 04:24:49 PM')
    })
    cy.location('pathname').should('eq', '/');
    cy.get('.navbar').should('exist');
    cy.get('form').should('exist');
    cy.get('.article-container').last().within(() => {
      cy.get('.title-author')
      cy.get('.article-img')
    })
    cy.get('.title-author').last().within(() => {
      cy.contains('h2', 'Sundar Pichai');
      cy.contains('October 30, 2023 at 04:07:00 PM')
    })
  })

  it('should show a details page when an article is clicked', () => {
    cy.get('.article-container').first().click();
    cy.location('pathname').should('eq', '/article/Sam%20Bankman-Fried%20testifies%20he%20called%20\'some%20of%20the\'%20shots%20at%20FTX%20-%20CNN');
    cy.get('.navbar').should('exist');
    cy.contains('h2', 'Sam Bankman-Fried testifies he called \'some of the\' shots at FTX - CNN');
    cy.get('.selected-article > :nth-child(2)').contains('October 30, 2023 at 04:24:49 PM')
    cy.get('.selected-article-description').contains('Assistant US Attorney Danielle Sassoon\'s pointed cross-examination continued after a break for lunch, in the form of short rapid-fire questions about what Bankman-Fried knew as the head of FTX versu')
    cy.get('.selected-article > :nth-child(5)').contains('Source: CNN')
    cy.contains('Author: From CNN\'s Allison Morrow');
  })
})