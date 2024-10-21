describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6-0x9829509cc1C745188059F06bd4c79EDa927744aD')
    cy.url().should(
      'contain',
      '/remove/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x9829509cc1C745188059F06bd4c79EDa927744aD',
    )
  })

  it('bnb-cake remove', () => {
    cy.visit('/remove/BNB/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('cake-bnb remove', () => {
    cy.visit('/remove/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x9829509cc1C745188059F06bd4c79EDa927744aD')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/remove/BNB/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'CAKE')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'CAKE')
  })
})
