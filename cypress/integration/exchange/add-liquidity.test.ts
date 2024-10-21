describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x9829509cc1C745188059F06bd4c79EDa927744aD')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'BUSD')
  })

  it('loads the BNB and tokens', () => {
    cy.visit('/add/BNB/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('loads the WBNB and tokens', () => {
    cy.visit('/add/0x3a7fD56f4C2701bcD26E566782FF1Ba49113f5b8/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'WBNB')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('does not crash if BNB is duplicated', () => {
    cy.visit('/add/BNB/BNB')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'BNB')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'CAKE')
    cy.get('#add-liquidity-input-tokenb').should('not.contain.text', 'CAKE')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb').should('contain.text', 'CAKE')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'QUACK')
    cy.visit('/add/0x9829509cc1C745188059F06bd4c79EDa927744aD')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BUSD')
    cy.visit('/add/BNB')
    cy.get('#add-liquidity-input-tokena').should('contain.text', 'BNB')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6-0x9829509cc1C745188059F06bd4c79EDa927744aD')
    cy.url().should(
      'contain',
      '/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x9829509cc1C745188059F06bd4c79EDa927744aD',
    )
  })

  it('redirects /add/BNB-token to /add/BNB/token', () => {
    cy.visit('/add/BNB-0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.url().should('contain', '/add/BNB/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
  })

  it('redirects /add/token-BNB to /add/token/BNB', () => {
    cy.visit('/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6-BNB')
    cy.url().should('contain', '/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/BNB')
  })

  it('redirects /add/WBNB to /add/WBNB/token', () => {
    cy.visit('/add/0x3a7fD56f4C2701bcD26E566782FF1Ba49113f5b8-0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6')
    cy.url().should(
      'contain',
      '/add/0x3a7fD56f4C2701bcD26E566782FF1Ba49113f5b8/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6',
    )
  })

  it('redirects /add/token-WBNB to /add/token/WBNB', () => {
    cy.visit('/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6-0x3a7fD56f4C2701bcD26E566782FF1Ba49113f5b8')
    cy.url().should(
      'contain',
      '/add/0x35A7B6Cc2bF890f367621ffF385d47Fb6cEF4FD6/0x3a7fD56f4C2701bcD26E566782FF1Ba49113f5b8',
    )
  })
})
