describe('Swap', () => {
  beforeEach(() => {
    cy.visit('/swap')
  })
  it('can enter an amount into input', () => {
    cy.get('#swap-currency-input .token-amount-input').type('0.001', { delay: 200 }).should('have.value', '0.001')
  })

  it('zero swap amount', () => {
    cy.get('#swap-currency-input .token-amount-input').type('0.0', { delay: 200 }).should('have.value', '0.0')
  })

  it('invalid swap amount', () => {
    cy.get('#swap-currency-input .token-amount-input').type('\\', { delay: 200 }).should('have.value', '')
  })

  it('can enter an amount into output', () => {
    cy.get('#swap-currency-output .token-amount-input').type('0.001', { delay: 200 }).should('have.value', '0.001')
  })

  it('zero output amount', () => {
    cy.get('#swap-currency-output .token-amount-input').type('0.0', { delay: 200 }).should('have.value', '0.0')
  })

  // This test requires account with some amount of BNB on it
  // Now with random private key it shows Insufficient BNB Balance button
  it.skip('can swap BNB for BUSD', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('.token-item-0x9829509cc1C745188059F06bd4c79EDa927744aD').should('be.visible')
    cy.get('.token-item-0x9829509cc1C745188059F06bd4c79EDa927744aD').click({ force: true })
    cy.get('#swap-currency-input').should('be.visible')
    cy.get('#swap-currency-input').type('0.001', { force: true, delay: 200 })
    cy.get('#swap-currency-output').should('not.equal', '')
    cy.get('#swap-button').click()
    cy.get('#confirm-swap-or-send').should('contain', 'Confirm Swap')
  })

  it('add a recipient does not exist unless in expert mode', () => {
    cy.get('#add-recipient-button').should('not.exist')
  })

  describe('expert mode', () => {
    beforeEach(() => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('confirm')
      })
      cy.get('#open-settings-dialog-button').click()
      cy.get('#toggle-expert-mode-button').click({ force: true })
      cy.get('#confirm-expert-mode').click()
    })

    it('add a recipient is visible', () => {
      cy.get('#add-recipient-button').should('be.visible')
    })

    it('add a recipient', () => {
      cy.get('#add-recipient-button').click({ force: true })
      cy.get('#recipient').should('exist')
    })

    it('remove recipient', () => {
      cy.get('#add-recipient-button').click({ force: true })
      cy.get('#remove-recipient-button').click({ force: true })
      cy.get('#recipient').should('not.exist')
    })
  })
})
