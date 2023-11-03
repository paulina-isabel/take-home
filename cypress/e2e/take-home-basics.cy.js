describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f101fd01d12c42e2877136a41b1b404c', {
      statusCode: 200,
      fixture: 'allArticles.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should show all movies when on the homepage', () => {
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

  // it('should display a helpful message to the user when an error occurs', () => {
  //   cy.intercept(
  //     "GET",
  //     "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
  //     {
  //       statusCode: 500
  //     }
  //   ).visit("http://localhost:3000");
  //   cy.get(".error-message").should('exist');
  // })

  // it('should display a helpful message to the user when an error occurs', () => {
  //   cy.intercept(
  //     "GET",
  //     "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
  //     {
  //       statusCode: 400
  //     }
  //   ).visit("http://localhost:3000");
  //   cy.get(".error-message").should('exist');
  // })

  // it('should display a helpful message to the user when an error occurs', () => {
  //   cy.intercept(
  //     "GET",
  //     "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
  //     {
  //       statusCode: 300
  //     }
  //   ).visit("http://localhost:3000");
  //   cy.get(".error-message").should('exist');
  // })
})