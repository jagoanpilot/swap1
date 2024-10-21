describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0x9829509cc1C745188059F06bd4c79EDa927744aD&outputCurrency=0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0x9829509cc1C745188059F06bd4c79EDa927744aD&outputCurrency=0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6',
    )
  })
})
