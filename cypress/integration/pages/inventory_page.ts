import { JsxEmit } from "typescript"

export class InventoryPage{
    btn_add_chart = '[name="add-to-cart-sauce-labs-backpack"]'
    btn_basket = '[class="shopping_cart_link"]'
    btn_checkout = '*[id="checkout"]'

    txt_first_name = '#first-name'
    txt_last_name = '#last-name'
    txt_postal_code = '#postal-code'

    btn_continue = '#continue'
    btn_finish = '#finish'

    clickAddChart(){
        cy.get(this.btn_add_chart).click()
    }
    clickBasket(){
        cy.get(this.btn_basket).click()
    }
    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }

    inputFirstName(first_name: string){
        cy.get(this.txt_first_name).type(first_name)
    }
    inputLastName(last_name: string){
        cy.get(this.txt_last_name).type(last_name)
    }
    inputPostalCode(postal_code: string){
        cy.get(this.txt_postal_code).type(postal_code)
    }

    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    checkoutComplete(first_name : string,last_name : string,postal_code : string){
        this.clickAddChart()
        this.clickBasket()
        this.clickCheckout()
        this.inputFirstName(first_name)
        this.inputLastName(last_name)
        this.inputPostalCode(postal_code)
        this.clickContinue()
        this.clickFinish()
    }

    checkoutNotComplete(last_name : string,postal_code : string){
        this.clickAddChart()
        this.clickBasket()
        this.clickCheckout()
        this.inputLastName(last_name)
        this.inputPostalCode(postal_code)
        this.clickContinue()
    }

    assertCheckoutComplete(){
        cy.get('[class="complete-header"]').should('be.visible')
        cy.get('[class="complete-text"]').should('be.visible')
    }

    assertCheckoutNotComplete(){
        cy.get('[data-test="error"]').should('be.visible')
    }
}